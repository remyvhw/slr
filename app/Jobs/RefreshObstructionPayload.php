<?php

namespace App\Jobs;

use App\Obstruction;
use GuzzleHttp\Client as Guzzle;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use League\HTMLToMarkdown\ElementInterface;
use League\HTMLToMarkdown\Environment;
use League\HTMLToMarkdown\HtmlConverter;
use Masterminds\HTML5;
use zz\Html\HTMLMinify;

class ImageConverter extends \League\HTMLToMarkdown\Converter\ImageConverter
{
    /**
     * @param ElementInterface $element
     *
     * @return string
     */
    public function convert(ElementInterface $element)
    {
        $src = $element->getAttribute('src');

        if (starts_with($src, '/')) {
            $src = "https://rem.info" . $src;
        }

        $alt = $element->getAttribute('alt');
        $title = $element->getAttribute('title');
        if ($title !== '') {
            return '![' . $alt . '](' . $src . ' "' . $title . '")';
        }
        return '![' . $alt . '](' . $src . ')';
    }

}

class RefreshObstructionPayload implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $obstruction;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Obstruction $obstruction)
    {
        $this->obstruction = $obstruction;
    }

    protected function retrieveObstructionHtml(): string
    {
        $obstruction = $this->obstruction;
        return retry(3, function () use ($obstruction) {
            $response = (new Guzzle)->get(config("slr.base_domain") . $obstruction->url);
            return $response->getBody()->getContents();
        }, 10000);
    }

    protected function retrievePayloadFromHtml(string $html): string
    {
        $html5 = new HTML5();
        $dom = $html5->loadHTML($html);

        $content = htmlqp($dom, '.paragraph--type--wysiwyg')->innerHTML5();
        $output = html5qp($content, null);
        $output->find("span")->children()->unwrap();
        return $output->innerHTML();
    }

    protected function cleanPayloadToMarkdown(string $payload): string
    {
        $environment = new Environment(['strip_tags' => true, 'hard_break' => true]);
        $environment->addConverter(new ImageConverter());
        $converter = new HtmlConverter($environment);
        return $converter->convert(HTMLMinify::minify($payload));
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        try {
            $html = $this->retrieveObstructionHtml();
        } catch (ClientException $e) {
            return;
        }

        $payload = $this->retrievePayloadFromHtml($html);
        $markdown = $this->cleanPayloadToMarkdown($payload);

        $this->obstruction->payload = $markdown;
        $this->obstruction->save();

        return $payload;

    }
}
