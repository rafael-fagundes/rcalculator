const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const runSequence = require('run-sequence');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const ghpages = require('gh-pages');

/* Clean dist folder */
gulp.task('clean' , () => {
    return del([
        'dist/**/*', 
    ]);
});

/* Static task */
gulp.task('static', () =>
    gulp.src('src/static/**/*.*')
    .pipe(gulp.dest('./dist/static/'))
);

/* Styles task */
gulp.task('styles', () =>
    gulp.src('src/styles/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'))
);

/* Pug task */
gulp.task('pug', () =>
    gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist/'))
);

/* Scripts task */
gulp.task('scripts', () =>
    gulp.src('src/scripts/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('./dist/scripts/'))
);

/* Build task */
gulp.task('build' , (done) => {
    runSequence('clean', 'styles', 'scripts', 'pug', 'static', done)
});


/* Serve task*/
gulp.task('serve', ['build'] , () => {
    
    browserSync.init({
        server: "./dist"
    });

    // Watch for styles modifications
    gulp.watch('src/styles/*.*', ['styles']);

    // Watch for scripts modifications
    gulp.watch('src/scripts/*.*', ['scripts']);

    // Watch for markup modifications
    gulp.watch('src/*.pug', ['pug']);

    // Reload browser on changes
    gulp.watch("dist/**/*.*").on('change', browserSync.reload);

});

/* Deploy */


gulp.task('deploy', ['build'], () => {
    ghpages.publish('dist', function(err) {});
})

/* Default Task */
gulp.task('default', ['serve']);
