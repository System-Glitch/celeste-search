const { src, dest } = require("gulp")
const debug = require("gulp-debug")
const webp = require('gulp-webp')

const optimize = () => src([
    `generated/meta/*.png`,
  ], { base: "generated" }) 
  .pipe(debug())
  .pipe(webp())
  .pipe(dest("src/assets"))

/**
 * `gulp optimize`
 */
module.exports = optimize
