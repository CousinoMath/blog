var gulp = require('gulp');
var mustache = require('gulp-mustache');
var data = require('gulp-data');

gulp.task('2016-spring', function() {
  return gulp.src("./src/template/syllabus.mustache")
    .pipe(data(function(file) {
      var course = JSON.parse(fs.readFileSync("./src/data/course/1315.json"));
      var class_ = JSON.parse(fs.readFileSync("./src/data/semester/2016-spring/1315-350.json"));
      var semester = JSON.parse(fs.readFileSync("./src/data/semester/2016-spring/term.json"));
      return { "course": course, "class": class_, "semester": semester };
    }))
    .pipe(mustache())
    .pipe(gulp.dest("./2016-1315-350-syllabus.html"));
});
