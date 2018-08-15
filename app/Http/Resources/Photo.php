<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Storage;

class Photo extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'direction' => $this->direction,
            'legend' => $this->legend,
            'versions' => [
                'orig' => Storage::disk("public")->url($this->getStoragePathAttribute()),
            ],
            'user' => new User($this->user),
            'stations' => new StationCollection($this->stations),
        ];
    }
}
