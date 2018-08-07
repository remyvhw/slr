<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="last-visit" content="@lastvisit">
        <meta name='mapbox-pk' content="{{ config('services.mapbox.public_key') }}">
        <meta name='user' content="{{ Auth::check() ? Auth::id() : '' }}">
        <meta name='api-root' content="{{ route('api.1.root') }}">
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css' rel='stylesheet' />
        <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.2.0/mapbox-gl-geocoder.css'
            type='text/css' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#85bb23">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>

    <body class="bg-grey-lighter">
        <div id="app">
            <main>
                <router-view></router-view>
            </main>
        </div>
        <script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>

</html>