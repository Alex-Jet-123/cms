// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry: ["@babel/polyfill", "./src/index.js"],
    // entry: "./src/index.js",

    entry: {
        bundle: "./src/index.js",
        chunk: "@babel/polyfill",
    },

    output: {
        path: __dirname +  "/build",
        // filename: "bundle.js"
        filename: `[name].js`
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./public/index.html"
    //     })
    // ]

};