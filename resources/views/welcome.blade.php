<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="last-visit" content="@lastvisit">
        <meta name='mapbox-pk' content="{{ config('services.mapbox.public_key') }}">
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css' rel='stylesheet' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#85bb23">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>

    <body class="bg-grey-lighter">
        <div id="app">
            <main class="container mx-auto">
                <slr-browser features-api-endpoint="{{ route('geojson-features.index') }}" obstructions-api-endpoint="{{ route('obstructions.index') }}"></slr-browser>
            </main>
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>

</html>