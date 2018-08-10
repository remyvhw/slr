<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Change extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $classname = class_basename(get_class($this->resource));
        $resourceName = "\App\Http\Resources\\" . $classname;
        $resource = new $resourceName($this->resource);

        return [
            "type" => $classname,
            "payload" => $resource,
            /*
             * We create a dummy id so we can render a list in Vue and specify a unique :key
             */
            "id" => str_slug($classname . $this->resource->id),
        ];
    }
}
