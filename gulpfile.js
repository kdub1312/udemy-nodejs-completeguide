const { src, dest } = require("gulp");
const sass = require('gulp-sass')(require('node-sass'));

function generateCSS(cb) {
    src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/css'));
    cb();
}

exports.css = generateCSS;