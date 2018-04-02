var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-ruby-sass");

var uglify = require("gulp-uglify");




gulp.task("zip",function(){
	gulp.src("dev/js/banner.js").pipe(uglify()).pipe(gulp.dest("dev/zipfile"));
});

gulp.task("listen",function(){
	connect.server({
		root:"dev",
		port:"1818",
		livereload:true
	});
	gulp.watch(["dev/index.html","dev/sass/*.scss","dev/css/index_scss.css"],function(){
		console.log("sass");
		gulp.src("dev/index.html").pipe(connect.reload());
//		gulp.src("dev/css/index_scss.css").pipe(connect.reload());
		sass("dev/sass/*.scss").pipe(gulp.dest("dev/css"));
	});
})
