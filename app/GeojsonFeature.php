<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeojsonFeature extends Model
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

    protected $casts = [
        'payload' => 'json',
    ];

}
