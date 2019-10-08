const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .copy('resources/sass/header.css', 'public/css')
    .copy('resources/sass/slider.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .copy('resources/img/logo.png', 'public/img')
    .copy('resources/img/1.jpg', 'public/img')
    .copy('resources/img/2.jpg', 'public/img')
    .copy('resources/img/sneaker1.jpg', 'public/img')




;
