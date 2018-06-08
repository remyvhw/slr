<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::prefix('1')->group(function () {
    Route::get('obstructions/new', 'Api\v1\ObstructionController@getNew');
    Route::apiResources([
        'geojson-features' => 'Api\v1\GeojsonFeatureController',
        'obstructions' => 'Api\v1\ObstructionController',
    ]);
});
