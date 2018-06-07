<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Obstruction extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $resource = $this;
        $output = parent::toArray($request);
        $output["created_at"] = $this->created_at->toIso8601String();
        $output["updated_at"] = $this->updated_at->toIso8601String();
        $output["deleted_at"] = $this->when($this->deleted_at, function () use ($resource) {
            return $resource->deleted_at->toIso8601String();
        });
        return $output;
    }
}
