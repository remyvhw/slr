<?php

namespace App\Console\Commands;

use GuzzleHttp\Client as Guzzle;
use Illuminate\Console\Command;

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

    protected function retrieveObstructions()
    {

        $response = (new Guzzle)->get(config("slr.obstructions.url"));
        return json_decode($response->getBody()->getContents());
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
