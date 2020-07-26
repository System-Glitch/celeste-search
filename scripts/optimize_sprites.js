const { src, dest } = require("gulp")
const debug = require("gulp-debug")
const imagemin = require('gulp-imagemin')

const optimize = () => src([
    `generated/sprites/*.png`,
  ], { base: "generated" }) 
  .pipe(debug())
  .pipe(imagemin())
  .pipe(dest("src/assets"))

/**
 * `gulp optimize`
 */
module.exports = optimize
