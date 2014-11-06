var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    jsValidate = require('gulp-jsvalidate'),
    less = require('gulp-less');

gulp.task('javascript', function() {
  gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-resource/angular-resource.js',
      './frontend/js/app.js',
      './frontend/js/configs/base-config.js',
      './frontend/js/modules/**/index.js',
      './frontend/js/modules/**/!(index)*.js'
    ])
    .pipe(jsValidate())
    .pipe(jshint())
    .pipe(concat('app.build.js'))
    .pipe(gulp.dest('./public/js/build/'));
});

gulp.task('less', function() {
  gulp.src([
    './frontend/less/**/*.less'  
  ])
  .pipe(less('app.build.css'))
  .pipe(gulp.dest('./public/css/'));
});

gulp.task('build', ['javascript', 'less']);
