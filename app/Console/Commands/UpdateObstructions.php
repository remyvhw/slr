<?php

namespace App\Console\Commands;

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

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
    }
}