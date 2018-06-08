<?php

namespace App\Http\Controllers\Api\v1;

use App\GeojsonFeature;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GeojsonFeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return GeojsonFeature::get();
    }

}
