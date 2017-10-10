const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name]-[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});


module.exports = {
    entry: path.join(__dirname, '/src/index.jsx'),
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: [{
                loader: 'babel-loader'
              }]
            },
            {
              test: /\.scss$/,
              use: extractSass.extract({
                fallback: 'style-loader',
                use: [{
                  loader: 'css-loader'
                }, {
                  loader: 'sass-loader',
                  options: {
                    includePaths: ['node_modules/muicss/lib/sass']
                  }
                }]
              })
            }
        ]
    },
    // devServer: {
    //     hot: true
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.ejs')
        }),
        extractSass
    ]
}