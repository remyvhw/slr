<?php

namespace App;

use App\Events\PhotoCreated;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $with = ["stations", "user"];
    /**
     * The event map for the model.
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => PhotoCreated::class,
    ];

    public function getStoragePathAttribute()
    {
        return $this->id ? "photos/orig/$this->id" : null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function stations()
    {
        return $this->belongsToMany(Station::class);
    }
}
