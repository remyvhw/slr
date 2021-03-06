let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

mix.webpackConfig({
    module: {
        noParse: /(mapbox-gl)\.js$/,
    }
});

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .options({
        postCss: [tailwindcss('./tailwind.js')],
        processCssUrls: false,
    })
    .version()
    .extract(['vue', 'collect.js', 'vuex', 'axios', 'mapbox-gl/dist/mapbox-gl.js', '@mapbox/mapbox-gl-geocoder']);
