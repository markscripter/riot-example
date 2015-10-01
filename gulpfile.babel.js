import babelify from 'babelify';
import browserify from 'browserify'
import combiner from 'stream-combiner2';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import path from 'path';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

gulp.task('public-html', () => {
  return gulp.src(path.join(__dirname, '/src/layout.html'))
    .pipe(gulp.dest(path.join(__dirname, '/public/')));
});

gulp.task('public-js', () => {
  var b = browserify({
      entries: './src/app.js',
      debug: true,
      transform: [babelify.configure({optional: ['runtime', 'es7.asyncFunctions']})],
      fullPaths: true
  });
  return b.bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest(path.join(__dirname, 'public/js/')));
});




gulp.task('public', ['public-html', 'public-js']);
