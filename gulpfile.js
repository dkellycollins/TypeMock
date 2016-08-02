var gulp = require('gulp');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

//Compile
gulp.task('compile', function (done) {
   runSequence('compile:clean',
               'compile:ts',
               done);
});

gulp.task('compile:clean', function() {
   return gulp.src('dist/**/*.*')
       .pipe(clean());
});

gulp.task('compile:ts', function(){
   var project = ts.createProject('./src/tsconfig.json');
   return gulp.src('src/**/*.ts')
       .pipe(ts(project))
       .pipe(babel({
          presets: ['es2015']
       }))
       .pipe(gulp.dest('dist'));
});

//Test

gulp.task('test', ['compile'], function() {
   return gulp.src('dist/test/**/*.js')
       .pipe(mocha({reporter: 'nyan'}));
});