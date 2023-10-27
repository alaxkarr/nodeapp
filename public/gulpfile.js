const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildstyles() {
  return src('scss/index.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['scss/index.scss'], buildstyles);
}

exports.default = series(buildstyles, watchTask);

/*

https://www.youtube.com/watch?v=Sk5jMurFHCo

npm init
npm install gulp gulp-sass sass -- save-dev
npm install -g gulp-cli
npm install --save-dev gulp

gulp

*/
