const path = require("path");

module.exports = {
    stories: ['../webcad/frontend/src/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                use: [
                    require.resolve('awesome-typescript-loader'),
                    // Optional
                    {
                        loader: require.resolve('react-docgen-typescript-loader'),
                        options: {
                            tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
            });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    }
};