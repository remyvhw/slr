<?php

namespace App\Console\Commands;

use App\Jobs\RefreshObstructionPayload;
use App\Obstruction;
use function GuzzleHttp\json_decode;
use GuzzleHttp\Client as Guzzle;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
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
     * @return array
     */
    protected function opinionatedlyDecodeJson(string $input): array
    {
        return throw_unless(data_get(json_decode($input), "data"), RuntimeException::class);
    }

    protected function retrieveObstructions(): Collection
    {

        $response = (new Guzzle)->get(config("slr.obstructions.url"));
        return collect($this->opinionatedlyDecodeJson($response->getBody()->getContents()));
    }

    public function saveHotObstruction($hotObstruction): Obstruction
    {
        $obstruction = Obstruction::withTrashed()->firstOrNew(["id" => data_get($hotObstruction, "id")]);

        if ($obstruction->trashed()) {
            $obstruction->restore();
        }

        $obstruction->fill(array_only((array) $hotObstruction, ["name", "type", "category", "major", "active", "night", "description", "lat", "lng", "url", "date"]))->save();

        RefreshObstructionPayload::dispatch($obstruction);

        return $obstruction;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $currentObstructions = $this->retrieveObstructions()->map([$this, "saveHotObstruction"])->pluck("id");
        Obstruction::get()->pluck("id")->diff($currentObstructions)->pipe(function ($trashed) {
            if ($trashed->isNotEmpty()) {
                Obstruction::destroy($trashed);
            }
        });

    }
}
