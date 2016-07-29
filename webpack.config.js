module.exports = {
    entry: ['./src/main.jsx'],
    output: {
        path: './dist/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader'
            },
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            }
        ]
    }
};