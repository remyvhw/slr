<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Auditable;
use OwenIt\Auditing\Contracts\Auditable as AuditableContract;

class Obstruction extends Model implements AuditableContract
{
    use Auditable;
    use SoftDeletes;

    public $incrementing = false;
    public $keyType = "string";

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $casts = [
        'major' => 'boolean',
        'active' => 'boolean',
        'night' => 'boolean',
    ];

}
