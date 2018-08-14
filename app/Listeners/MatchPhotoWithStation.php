<?php

namespace App\Listeners;

use App\Events\PhotoSaved;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class MatchPhotoWithStation
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  PhotoSaved  $event
     * @return void
     */
    public function handle(PhotoSaved $event)
    {
        //
    }
}
