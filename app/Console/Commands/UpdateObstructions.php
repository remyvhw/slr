<?php

namespace App\Console\Commands;

use function GuzzleHttp\json_decode;
use GuzzleHttp\Client as Guzzle;
use Illuminate\Console\Command;
use RuntimeException;

class UpdateObstructions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'obstructions:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Refresh obstructions using rem's private api.";

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Decode json and throw an exception if the passed string is
     * undecodable.
     *
     * @param string $input
     * @throws RuntimeException
     * @return object
     */
    protected function opinionatedlyDecodeJson(string $input): object
    {
        if (!($output = json_decode($input))) {
            throw new RuntimeException('Invalid JSON fetched.');
        }
        return $output;
    }

    protected function retrieveObstructions(): object
    {

        $response = (new Guzzle)->get(config("slr.obstructions.url"));
        return $this->opinionatedlyDecodeJson($response->getBody()->getContents());
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $hotObstructions = $this->retrieveObstructions();

    }
}
