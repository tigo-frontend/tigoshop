var webpack = require('webpack');
var path = require("path");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('build/common.js');
var ExtractTextPlugin = require("./node_modules/extract-text-webpack-plugin");
var cssExtract = new ExtractTextPlugin("build/style.css");  //文件编译到哪里？

module.exports = {
    //插件项
    plugins: [
        commonsPlugin,
        cssExtract
    ],
    //页面入口文件配置
    entry: {
        //项目类库
        "build/angular-lib" : [
            __dirname+'/src/index.js',
            __dirname+'/src/lib/angular/angular.js',
            __dirname+'/src/lib/angular/angular-resource.js',
            __dirname+'/src/lib/angular/angular-ui-router.js'
        ],
        //项目ng入口配置
        "build/app":[
            __dirname+'/src/app.js',
            __dirname+'/src/js/member/component.js'
        ]
        //"js/component":[__dirname+'/build/components/mall.js']   //组件化
    },
    //入口文件输出配置
    output: {
        path: __dirname+'/',
        filename: '[name].js'
    },
    module:{
        noParse:[/angular/],//不解析此文件
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.scss$/,loader:ExtractTextPlugin.extract('style', 'css!sass')},//'style!css!sass' },
            {test:/\.(png|jpg)/,loader:'url?limit=30000&name=../[path][name].[ext]'} //不能大于20K图片
        ]
    },
    resolve: {
        //查找module的话从这里开始查找
        root: __dirname+'/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js','.jsx', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};
