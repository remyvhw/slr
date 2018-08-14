<?php

namespace App\Listeners;

use App\Events\PhotoCreated;
use App\Station;
use Illuminate\Contracts\Queue\ShouldQueue;
use Location\Coordinate;
use Location\Distance\Vincenty;

class MatchPhotoWithStation implements ShouldQueue
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
    public function handle(PhotoCreated $event)
    {
        if (!$event->photo->lat || !$event->photo->lng) {
            return;
        }

        $calculator = new Vincenty();
        $photoCoordinate = new Coordinate($event->photo->lat, $event->photo->lng);

        Station::get()->map(function ($station) use ($calculator, $photoCoordinate) {
            return [
                "station" => $station,
                "distance" => $calculator->getDistance($photoCoordinate, new Coordinate($station->lat, $station->lng)),
            ];
        })->filter(function ($stn) {
            return $stn["distance"] < 450;
        })->each(function ($stn) use ($event) {
            $event->photo->stations()->attach($stn["station"]);
        });
    }
}
