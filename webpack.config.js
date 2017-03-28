var webpack = require("webpack");
module.exports = {
    // 打包入口
    entry : './src/js/main.js',
    // 打包出口
    output : {
        path : __dirname + '/dist/js',
        filename : 'bundle.js',
        publicPath : '/dist/js'
    },
    module : {
        loaders : [
            { test : /\.css$/, loader: 'style-loader!css-loader' },
            /*{
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },*/
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=../image/[name].[ext]'  //打包出口
            },
            {
                test : /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query : {
                    presets : ['react', 'es2015']
                }
            }

        ]
    },
    plugins: [
        new webpack.BannerPlugin("Author Lycoris_cty")
    ],
    devServer : {
        port : 8888,
        publicPath : '/dist/js'  // 相对于出口
    }


};
