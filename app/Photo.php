<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    public function getStoragePathAttribute()
    {
        return $this->id ? "photos/orig/$this->id" : null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
