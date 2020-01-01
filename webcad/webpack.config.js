const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'frontend/src/index.tsx'),
    module: {
        rules: [
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'frontend/src')
        ],
        extensions: ['.tsx', '.js', '.ts', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'frontend/static/frontend'),
        filename: 'bundle.js'
    }
};