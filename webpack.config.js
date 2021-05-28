const path = require('path')  // you cannot use modules in the config file

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // path: './dist'
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}