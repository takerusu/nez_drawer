gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
less = require 'gulp-less'
jade = require 'gulp-jade'
webserver = require 'gulp-webserver'
plumber = require 'gulp-plumber'
notify = require 'gulp-notify'
__srcdir = './src/'
__distdir = './dist/'

gulp.task 'jade', () ->
  gulp.src __srcdir + 'jade/index.jade'
    .pipe plumber(errorHandler: notify.onError('Error: <%= error.message %>'))
    .pipe jade()
    .pipe gulp.dest(__distdir)

gulp.task 'coffee', () ->
  gulp.src __srcdir + 'js/*.coffee'
    .pipe plumber(errorHandler: notify.onError('Error: <%= error.message %>'))
    .pipe coffee(
      bare: true
    )
    # .pipe concat 'index.js'
    .pipe gulp.dest(__distdir + 'js')

gulp.task 'less', () ->
  gulp.src __srcdir + 'css/*.less'
    .pipe plumber(errorHandler: notify.onError('Error: <%= error.message %>'))
    .pipe less()
    .pipe gulp.dest(__distdir + 'css')

gulp.task 'watch', ['jade', 'coffee', 'less', 'webserver'], () ->
  gulp.watch __srcdir + 'jade/*.jade', ['jade']
  gulp.watch __srcdir + 'css/*.less', ['less']
  gulp.watch __srcdir + 'js/*.coffee', ['coffee']

gulp.task 'webserver', () ->
  gulp.src './dist'
    .pipe webserver(
      fallback: 'index.html'
      port: 9001
      livereload: true
      #directoryListing: true
    )

gulp.task 'default', ['watch']
