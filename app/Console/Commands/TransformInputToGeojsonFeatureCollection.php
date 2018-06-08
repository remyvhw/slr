<?php

namespace App\Console\Commands;

use App\GeojsonFeature;
use Cache;
use Illuminate\Console\Command;

class TransformInputToGeojsonFeatureCollection extends Command
{
    /**
     * The name and signature of the console command.
     *
     *
     *
     * @var string
     */
    protected $signature = 'geojson:input {input?}'; // `php artisan geojson:input < ~/myfile.json`

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Take a raw JSON string from REM\'s website, transform it to GeojsonFeature objects and save them.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    protected function extractLines(array $lines)
    {
        collect($lines)->map(function ($line) {
            return [
                "type" => "Feature",
                "properties" => [
                    "stroke" => "#85bb23",
                    "stroke-width" => "2",
                    "stroke-opacity" => "1",
                    "name" => array_get($line, "name"),
                ],
                "geometry" => [
                    "type" => "LineString",
                    "coordinates" => array_get($line, "coordinates"),
                ],
            ];
        })->each(function ($feature) {
            GeojsonFeature::create([
                'name' => str_slug(str_limit(array_get($feature, "properties.name", ""))),
                'payload' => $feature,
            ]);
        });
    }

    protected function extractPoints(array $points)
    {
        collect($points)->map(function ($point) {
            return [
                "type" => "Feature",
                "properties" => [
                    "marker-color" => "#85bb23",
                    "marker-size" => "2",
                    "marker-symbol" => "rail-metro",
                    "name" => array_get($point, "name"),
                ],
                "geometry" => [
                    "type" => "Point",
                    "coordinates" => [
                        array_get($point, "lng"),
                        array_get($point, "lat"),
                    ],
                ],
            ];
        })->each(function ($feature) {
            GeojsonFeature::create([
                'name' => str_slug(str_limit(array_get($feature, "properties.name", ""))),
                'payload' => $feature,
            ]);
        });
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $data = json_decode(file_get_contents('php://stdin'), true);

        if (!array_has($data, "rem_lines")) {
            throw new \RuntimeException("Invalid input JSON. Copy raw data from REM source.");
        }

        GeojsonFeature::truncate();

        $this->extractLines(array_get($data, "rem_lines"));
        $this->extractPoints(array_get($data, "rem_stations"));

        Cache::tags("geojsonfeature")->flush();
    }
}
