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

Route::prefix('1')->name("api.1.")->group(function () {
    Route::get('', function () {
        return redirect()->route('browser');;
    })->name('root');;

    Route::apiResources([
        'photos' => 'Api\v1\PhotoController',
        'changes' => 'Api\v1\ChangeController',
        'geojson-features' => 'Api\v1\GeojsonFeatureController',
        'obstructions' => 'Api\v1\ObstructionController',
    ]);
});
