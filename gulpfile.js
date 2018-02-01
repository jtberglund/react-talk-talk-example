const gulp = require('gulp');
const gutil = require('gulp-util');
const Config = require('./config/gulp.config.js');
const webpackConfig = require('./config/webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

// Production build
gulp.task('prod', ['build']);

// Dev server
gulp.task('dev', ['webpack:dev-server']);

gulp.task('webpack:dev-server', done => {
    webpackConfig.entry.app = [`webpack-dev-server/client?http://${Config.devAddress}:${Config.devPort}`, 'webpack/hot/dev-server'].concat(
        webpackConfig.entry.app
    );

    new WebpackDevServer(webpack(webpackConfig), {
        historyApiFallback: true,
        contentBase: ['./public'],
        hot: true,
        stats: {
            children: false,
            chunks: false,
            chunkModules: false,
            modules: false,
            colors: true
        }
    }).listen(Config.devPort, Config.devAddress, err => {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
    });
});
