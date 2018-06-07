<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="last-visit" content="@lastvisit">
        <meta name='mapbox-pk' content="{{ config('services.mapbox.public_key') }}">
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css' rel='stylesheet' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">


    </head>

    <body class="bg-white">
        <div id="app">
            <main class="container mx-auto">
                <obstructions-browser api-endpoint="{{ route('obstructions.index') }}"></obstructions-browser>
            </main>
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>

</html>