const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const gap = require('gulp-append-prepend');
const fbtools = require('firebase-tools');
// const rollup = require('rollup');
// const inputOptions = { input: './public/js/app.js' };
// const outputOptions = { output: './public/lib/test/main.min.js' };

gulp.task('default', ['templates', 'mainjs', 'copyfiles', 'deploy'], function () {

});

const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');

gulp.task('templates', function () {
    gulp.src('public/templates/*.handlebars')
    .pipe(handlebars({
        handlebars: require('handlebars')
      }))
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(gap.prependText("import Handlebars from '../../lib/handlebars/runtime'; export default"))
    //   .pipe(declare({
    //       namespace: 'MyApp.templates',
    //       noRedeclare: true, // Avoid duplicate declarations
    //   }))
    //   .pipe(concat('templates.js'))
      .pipe(gulp.dest('public/templates/precompiled'));
});

// gulp.task('mainjs', function() {
//     gulp.src('./public/js/app.js')
//       .pipe(rollup({
//         treeshake: false,
//         plugins: [require('rollup-plugin-babel'),
//     ],
//       }))
//       .pipe(gulp.dest('/build/js/dist'))
//   })

gulp.task('mainjs', function() {
    rollup.rollup(inputOptions, outputOptions);
})

gulp.task('copyfiles', function () {
    gulp.src('./public/lib/main.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('../PhotoBlog/public/lib'));
    gulp.src('./public/css/style.css')
        .pipe(gulp.dest('../PhotoBlog/public/css'));
    gulp.src('./public/assets/img/*')
        .pipe(gulp.dest('../PhotoBlog/public/img'));
    gulp.src(['./public/lib/handlebars/dist/handlebars.runtime.min.js', './public/lib/navigo/lib/navigo.min.js', './public/lib/navigo/lib/navigo.min.js.map'])
        .pipe(gulp.dest('../PhotoBlog/public/lib'));
    gulp.src(['./public/js/app.js', './public/js/helpers.js'])
        .pipe(gulp.dest('../PhotoBlog/public/js'));
    gulp.src(['./public/js/utils/settings.js', './public/js/utils/clearInputs.js'])
        .pipe(gulp.dest('../PhotoBlog/public/js/utils'));
});

gulp.task('deploy', function() {
    fbtools.deploy().then(function() {
      process.exit(0);
    }).catch(function(err) {
      console.log(err);
      process.exit(1);
    });
})

// gulp.task('scripts', function () {
//     return gulp.src(['js/lib/handlebars/handlebars.runtime.js', 'js/dist/templates.js', 'js/app/**/*.js'])
//       .pipe(concat('bundle.js'))
//       .pipe(uglify())
//       .pipe(gulp.dest('js/dist/'));
// });