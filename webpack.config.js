const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const markup = {
    test: /\.html$/,
    loaders: ['ngtemplate-loader', 'html-loader']
};

const scripts = {
    test: /\.js$/,
    loaders: ['uglify-loader', 'ng-annotate-loader', 'babel-loader?presets[]=es2015']
};

const style = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({ 
        fallback: 'style-loader', 
        use: {
            loader: 'css-loader',
            options: {
                sourceMap: true,
                url: false
            }
        }
    })
}

module.exports = {
    entry: {
        app: './src/app/_mailbox',
        tests: './src/tests/_tests'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name]/[name].js",
        publicPath: './dist/'

    },
    devtool: 'sourcemap',
    module: {
        rules: [markup, scripts, style],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            { from: './src/data', to: './data' },
            { from: './src/img' , to: './img' },
            { from: './src/index.html' }
        ]),
        new ExtractTextPlugin({
            filename: 'styles/styles.css',
            allChunks: true
        })
    ]
};