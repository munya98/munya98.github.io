let mix = require('laravel-mix');

mix.react('src/js/app.js', 'dist/js')
	.sass('src/sass/app.sass', 'dist/css')
	.setPublicPath('dist')
