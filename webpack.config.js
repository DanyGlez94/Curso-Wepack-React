const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devserver: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true,
        },
        watchFiles: path.join(__dirname, "./**"),
        compress: true,
        port: 8080,
        open: true,
    }
};