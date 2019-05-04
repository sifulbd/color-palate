const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

// Minifed Css file
gulp.task('mcss', () => {
    // Source files
    return gulp.src('app/assets/plugins/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // destionation css file
    .pipe(gulp.dest('dist/assets/plugins/css/mini'));
});


// All minifed CSS will be in one CSS file.
gulp.task('concatCss', function() {
    // Source file
    return gulp.src(['app/assets/plugins/css/*.css'])
    // file name
    .pipe(concat('app.css'))
    // Destination files
    .pipe(gulp.dest('dist/assets/plugins/css'));
});



// Minifed JS file
gulp.task('mJs', () => {
    // Source files
    return gulp.src('dist/assets/plugins/js/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // destionation css file
    .pipe(gulp.dest('dist/assets/plugins/js/mini'));
});


// All minifed JS will be in one CSS file.
gulp.task('concatJs', function() {
    // Source file
    return gulp.src(['app/assets/plugins/js/*.js'])
    // file name
    .pipe(concat('app.js'))
    // Destination files
    .pipe(gulp.dest('dist/assets/plugins/js'));
});

