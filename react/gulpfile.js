const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

const babelOptions = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-transform-object-assign",
      "@babel/plugin-transform-react-jsx"
    ]
}


function build() {
  return src('./src/SimpleComponent.jsx')
    .pipe(babel(babelOptions))
    .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
    .pipe(dest('./static/js'));
}


exports.build=build;
