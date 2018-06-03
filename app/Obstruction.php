<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Obstruction extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;

    public $incrementing = false;
    public $keyType = "string";

}
