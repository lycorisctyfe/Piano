var webpack = require("webpack");
module.exports = {
    // 打包入口
    entry : './src/js/main.js',
    // 打包出口
    output : {
        path : __dirname + '/dist/js',
        filename : 'bundle.js',
        publicPath : '/dist/js/'  
    },
    module : {
        loaders : [
            { test : /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
                // loader: 'url-loader?name=../image/[name].[ext]'
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
        port : 8888
    }


};
