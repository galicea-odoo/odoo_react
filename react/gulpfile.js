const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const streamify = require('gulp-streamify');

// with browserify:
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');

// with webpack:
const webpack = require('webpack');
const webpackStream = require('webpack-stream');


const webpackConfig = { // minimal config
  entry: './tmp/SimpleComponent.js',
  output: {
    filename: 'SimpleComponent.js'
  },
  mode: 'production'
//  mode: 'development'
};



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


function build_b() {
  return src('./src/SimpleComponent.jsx')
    .pipe(babel(babelOptions))
    .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
    .pipe(streamify(uglify()))
    .pipe(dest('./static/js'))
}

function build() {
  return src('./src/SimpleComponent.jsx')
    .pipe(babel(babelOptions)).pipe(dest('./tmp'))
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(dest('./static/js'))
}



exports.build=build;

