const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: path.resolve(__dirname, 'frontend/svg/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'frontend/static/frontend/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'frontend/svg')
        ],
        extensions: ['.tsx', '.js', '.ts', '.json']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx$/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'source-map-loader',
                    options: {
                        enforce: 'pre',
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};