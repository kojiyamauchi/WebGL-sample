var gulp = require('gulp'), // call gulp.
  webpack = require('webpack'), // webpack.
  webpackStream = require('webpack-stream'), // webpack PlugIn.
  webpackConfig = require('./webpack/webpack.config'), // webpack config file.
  concat = require('gulp-concat'), // JS File Concatenate.
  plumber = require('gulp-plumber'), // case, error task. don't stop watch plugin.
  sass = require('gulp-sass'), // sass file compile plugin.
  sourcemaps = require('gulp-sourcemaps'), // write sourcemaps.
  gutil = require('gulp-util'), // gulp-util plugin.
  imageMin = require('gulp-imagemin'), // images compression plugin.
  pngImageMin = require('imagemin-pngquant'), // png images compression plugin.
  changed = require('gulp-changed'), // only change file watch plugin.
  noCompressionImagesFold = (['noCompressionImages/*.jpg', 'noCompressionImages/*.jpeg', 'noCompressionImages/*.png', 'noCompressionImages/*.gif', 'noCompressionImages/*.svg']), // no compression images fold.
  compressionImageFold = 'images/', // finish compression images fold.
  autoprefixer = require('gulp-autoprefixer'), // add vendor prefix in CSS automatically.
  cssmin = require('gulp-cssmin'), // CSS File Compression.
  jsmin = require('gulp-uglify'), // JS File Compression.
  rename = require('gulp-rename'), // File Rename PlugIn.
  del = require('del'), // File Delete, Not Gulp PlugIn.
  ftp = require('vinyl-ftp'), // ftp plugin.
  sftp = require('gulp-sftp'), // sftp plugin.
  browserSync = require('browser-sync'), // local browser sync plugin.
  upLoadFileWrite = (['*.html', 'css/default.min.css', 'js/core.min.js', 'images/*']), // upload file write.
  notUpLoadFileWrite = ([]), // don't upload file write.
  upLoadFile = upLoadFileWrite.concat(notUpLoadFileWrite); //ftp upload file. variable upLoadFileWrite concatenate variable notUpLoadFileWrite.

// webpack.
gulp.task('webpack', function () {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('js/'));
});

// JS File Concatenate..
gulp.task('concat', function () {
  return gulp.src(['plugins/*.js', 'js/_core.js'])
    .pipe(concat('core.js'))
    .pipe(gulp.dest('js/'));
});

// JS File Compression.
gulp.task('jsmin', function () {
  gulp.src('js/core.js')
    .pipe(jsmin({
      preserveComments: 'some'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('js/'));
});

// compression images.
gulp.task('compressionImages', function () {
  gulp.src(noCompressionImagesFold)
    .pipe(plumber())
    .pipe(changed(compressionImageFold))
    .pipe(imageMin({
      use: [pngImageMin({
        quality: '60-80',
        speed: 4
      })]
    }))
    .pipe(gulp.dest(compressionImageFold));
});

// sass compile & add vendor prefix automatically.
gulp.task('sass', function () {
  gulp.src('sass/default.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4', 'ios_saf >= 8'],
      cascade: false
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('css/'));
});

// CSS File Compression.
gulp.task('cssmin', function () {
  gulp.src('css/default.css')
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css/'));
});

// HTML File Rename PHP File. Setting at The Work Start.
gulp.task('rename', function () {
  gulp.src('index.html')
    .pipe(rename({
      extname: '.php'
    }))
    .pipe(gulp.dest('.'));
});

// HTML File & .DS_Store Delete. Setting at The Work Start.
gulp.task('delete', function (cb) {
  del(['index.html', '**/.DS_Store'], cb);
});

// local browser connect & sync.
gulp.task('browserSync', function () {
  return browserSync({
    browser: 'google chrome',
    notify: false,
    server: {
      baseDir: '.',
      index: 'index.html'
    }
  });
});

// file save's local browser reload.
gulp.task('localBrowserReload', function () {
  browserSync.reload();
});

// ftp upload.
gulp.task('ftpUpLoad', function () {
  var ftpConnect = ftp.create({
    host: '***',
    user: '***',
    password: '***',
    parallel: 7,
    log: gutil.log
  });
  gulp.src(upLoadFile, {
      base: '.',
      buffer: false
    })
    .pipe(ftpConnect.newer('/webGL_sample'))
    .pipe(ftpConnect.dest('/webGL_sample'));
});

// gulp default task, terminal command 'gulp'.
gulp.task('default', ['browserSync'], function () { // first task, local server connect & local browser sync.
  gulp.watch(['base/*', 'tags/*', 'three/*'], ['webpack']); // JS File webpack.
  gulp.watch(['plugins/*.js', 'js/_core.js'], ['concat']); // JS File Concatenate.
  gulp.watch('js/core.js', ['jsmin']); // watching change's JS flie, File Compression.
  gulp.watch('sass/default.scss', ['sass']); // watching sass file save's auto compile & add vendor prefix automatically.
  gulp.watch('css/default.css', ['cssmin']); // watching change's CSS flie, File Compression.
  gulp.watch(noCompressionImagesFold, ['compressionImages']); // watching noCompressionImages fold changed images, compression images.
  //gulp.watch('**/*', ['rename']); // watching change's HTML flie. Rename PHP file.
  //gulp.watch('**/*', ['delete']); // watching rename PHP file. delet HTML file.
  gulp.watch(upLoadFile, ['ftpUpLoad']); // watching file save's auto ftp upload.
  gulp.watch(upLoadFile, ['localBrowserReload']); // watching file save's local browser reload.
});
