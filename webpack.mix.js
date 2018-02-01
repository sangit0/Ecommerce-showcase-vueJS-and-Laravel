let mix = require('laravel-mix');


mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
   mix.browserSync({
           proxy: 'http://localhost:8000/'
       });
