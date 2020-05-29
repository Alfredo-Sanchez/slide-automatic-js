
import gulp from 'gulp'

//Javacript
import babel from 'gulp-babel'
import terser from 'gulp-terser'

//Concat
import concat from 'gulp-concat'

gulp.task('babel', ()=>{
    return gulp
        .src('./src/js/*.js')
        .pipe(concat('scripts-min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(gulp.dest('./public/js'))
})

gulp.task('default', ()=>{
    gulp.watch('./src/js/*.js', gulp.series('babel'))
})