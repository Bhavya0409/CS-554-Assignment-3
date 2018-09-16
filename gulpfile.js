var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var browserSync = require("browser-sync").create();

gulp.task("sass", function() {
  return gulp
    .src("public/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat("compile.css"))
    .pipe(
      cleanCSS({ debug: true })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("public/css"))
});

gulp.task("watch", ["sass"], function() {
  gulp.watch("public/scss/**/*.scss", ["sass"]);
  // gulp.watch("public/*.html", browserSync.reload);
  // gulp.watch("public/js/**/*.js", browserSync.reload);
});

gulp.task("default", ["watch"]);
