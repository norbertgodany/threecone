var gulp = require("gulp")
var browserSync = require('browser-sync').create()

gulp.task("html", function (done) {
	gulp.src("src/*.html")
		.pipe(gulp.dest("dist"))
	done()
})

gulp.task("js", function (done) {
	gulp.src("src/js/*.js")
		.pipe(gulp.dest("dist/js/"))
		.pipe(browserSync.stream())
	done()
})

gulp.task("css", function (done) {
	gulp.src("src/css/*.css")
		.pipe(gulp.dest("dist/css/"))
		.pipe(browserSync.stream())
	done()
})

gulp.task("watch", function() {
    browserSync.init({
        server: {
			baseDir: "./dist"
		},
		notify: false
	})
	
	gulp.watch("src/*.html", gulp.series("html")).on('change', browserSync.reload)
	gulp.watch("src/js/*", gulp.series("js"))
	gulp.watch("src/css/*", gulp.series("css"))

})

gulp.task("default", gulp.parallel("html", "js", "css", "watch"))