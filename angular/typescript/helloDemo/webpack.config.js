const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry : "./src/first.ts",
    output : {
        filename : "main.buidle.js",
        path : path.join(__dirname, 'dist'),        
    },
    resolve : {
        extensions : [".ts",".css"]
    },
    module :{
        rules : [
            {test : /.ts/, loader : "ts-loader"},
            {test : /.css/, loader : "css-loader"}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin()
    ]
}