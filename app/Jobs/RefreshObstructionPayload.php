<?php

namespace App\Jobs;

use App\Obstruction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

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

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
    }
}
