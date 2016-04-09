var gulp = require('gulp')
	,jshint = require('gulp-jshint')
	,sass = require('gulp-sass')
	,concat = require('gulp-concat')
	,uglify = require('gulp-uglify')
	,rename = require('gulp-rename')
	,connect = require('gulp-connect')
	,sequence = require('gulp-sequence')
	,clean = require('gulp-clean');

var bowerJSLibs = [
	'bower_components/angular/angular.min.js',
	'bower_components/bootstrap/dist/js/bootstrap.min.js'
];

var bowerCSSLibs = ['bower_components/bootstrap/dist/css/bootstrap.min.css'];

var buildFolder = 'build';
var cssFolder = buildFolder+'/css'
	,jsFolder = buildFolder+'/js'
	,imgFolder = buildFolder+'/img'
	,templateFolder = buildFolder+'/templates';

gulp.task('clean', function() {
	return  gulp.src(buildFolder+'/')
		.pipe(clean());
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(cssFolder));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('application.js'))
        .pipe(gulp.dest(jsFolder))
        .pipe(rename('application.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsFolder));
});

//Copy templates
gulp.task('templates', function(){
	gulp.src('*.html')
		.pipe(gulp.dest(buildFolder));
	return gulp.src('app/templates/**/*.html')
		.pipe(gulp.dest(templateFolder));
});

// Add dependencies
gulp.task('libmin-js',function(){
	return gulp.src(bowerJSLibs)
		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest(jsFolder));
});

gulp.task('libmin-css',function(){
	return gulp.src(bowerCSSLibs)
		.pipe(concat('lib.min.css'))
		.pipe(gulp.dest(cssFolder));
});

gulp.task('libmin',['libmin-js','libmin-css']);

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('server', function() {
    connect.server({
    	livereload:true,
    	port:8081,
    	root: 'build',
    	fallback: 'build/error.html'
    });
});


// Default Task
gulp.task('default', function(){
	sequence('clean',['lint', 'sass', 'scripts','templates', 'libmin', 'server', 'watch'],function(){});
});