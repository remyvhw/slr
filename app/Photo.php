<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public function getStoragePathAttribute()
    {
        return $this->id ? "photos/orig/$this->id" : null;
    }
}
