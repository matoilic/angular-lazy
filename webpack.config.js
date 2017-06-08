const webpack = require('webpack');
const path = require('path');

module.exports = {
    bail: true,
    devtool: 'source-map',
    entry: {
        'angular-lazy': path.resolve('src/angular-lazy.js')
    },

    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        library: 'angularLazy',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    externals: {
        angular: 'angular',
        'angular-ui-router': 'angular-ui-router',
        'ui-router-extras': 'ui-router-extras'
    },
    module: {
        strictExportPresence: true,
        rules: [
            { parser: { requireEnsure: false } },
            {
                test: /\.js$/,
                include: path.resolve('src'),
                loader: require.resolve('babel-loader'),
                options: {
                    babelrc: false,
                    presets: [
                        ["env", {
                            targets: {
                                browsers: [
                                    '>3%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 11',
                                    'not ios < 9'
                                ]
                            },
                            useBuiltIns: false
                        }]
                    ]
                }
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
