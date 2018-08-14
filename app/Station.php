<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    public function photos()
    {
        return $this->belongsToMany(Photo::class);
    }
}
