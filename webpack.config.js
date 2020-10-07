module.exports = {
        entry: "./index.js",
        output: {
                path: __dirname,
                filename: "output.js"
        },
        module: {
                rules: [{
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                                loader: "babel-loader",
                        }
                }]

        },
        resolve: {
                extensions: ["*", ".js", ".jsx"]
        },
        mode: 'development'
}