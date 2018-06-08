<?php

namespace App\Http\Controllers\Api\v1;

use App\GeojsonFeature;
use App\Http\Controllers\Controller;
use Cache;
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
        return Cache::tags("geojsonfeature")->rememberForever("app:http:controllers:api:v1:geojsonfeaturecontroller:index", function () {
            return GeojsonFeature::get();
        });
    }

}
