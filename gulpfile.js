const {
    src, dest, series, parallel, watch
} = require('gulp');


//sass 編譯
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


function sassmap() {
    return src('./src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'))
}


// html 樣板
const fileinclude = require('gulp-file-include');
function html_front() {
    return src(['./src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(dest('dist/'))
}

function html_back() {
    return src(['./src/admin/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(dest('dist/admin'))
}
function php() {
    return src(['./src/php/*.php'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(dest('dist/php'))
}
function phpLib() {
    return src(['./src/php/Lib/*.php'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(dest('dist/php/Lib'))
}
//image 打包
const imagemin = require('gulp-imagemin');

function img_orig() {
    return src(['./src/images/*.*', './src/images/**/*.*', './src/images/**/**/*.*'])
        .pipe(dest('dist/images'))
}

function img_compress() {
    return src(['./src/images/*.*', './src/images/**/*.*', './src/images/**/**/*.*'])
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 80, progressive: true }), // 壓縮品質      quality越低 -> 壓縮越大 -> 品質越差
            imagemin.optipng({ optimizationLevel: 3 }) // png
        ]))
        .pipe(dest('dist/images'))
}


// js

const babel = require('gulp-babel');

function babel5() {
    return src(['src/js/*.js', 'src/js/**/*.js'])
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(dest('dist/js'));
}


// 同步瀏覽器
const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['./src/sass/*.scss', './src/sass/**/*.scss'], sassmap).on('change', reload);
    watch(['./src/*.html', './src/**/*.html'], html_front).on('change', reload);
    watch(['./src/admin/*.html'], html_back).on('change', reload);
    watch(['./src/js/*.js', './src/js/**/*.js'], babel5).on('change', reload);
    watch(['./src/images/**/*.*', './src/images/**/**/*.*', './src/images/**/**/*.js'], img_orig).on('change', reload);
    done();
}


exports.default = series(parallel(img_orig, sassmap, html_front, html_back, php, phpLib, babel5), browser)


exports.package = parallel(img_compress, sassmap, html_front, html_back, php, phpLib, babel5)




