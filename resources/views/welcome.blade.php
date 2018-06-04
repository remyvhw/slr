<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="last-visit" content="@lastvisit">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">


    </head>

    <body class="bg-grey-light">
        <div id="app">


            <obstruction-browser></obstruction-browser>

        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>

</html>