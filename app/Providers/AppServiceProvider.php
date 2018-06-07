<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        Blade::directive('lastvisit', function () {
            return '<?php
            $lastVisit = Cache::remember("app:last_visit", 5, function () {
                $lastVisit = session()->get("last_visit");
                session()->put("last_visit", now());
                return $lastVisit;
            });
            echo $lastVisit ? $lastVisit->toIso8601String() : "";
            ?>';
        });

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
