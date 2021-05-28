# udemy-webpack5

`npm i webpack webpack-cli -D`
`npx webpack`

Webpack will by default create a dist folder, with a file inside called main.js.

But a custom configuration is recommended.

To create a custom configuration, create a file called webpack.config.js. Minimum mandatory configuration:

```javascript
const path = require('path'); // you cannot use modules in the config file

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // path: './dist' // will throw an error about relative vs. absolute paths
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'none',
};
```

Delete the original dist folder (with main.js) with `rm -rf dist`, then run `npx webpack` again.

Now you should have dist/bundle.js, a much more extensive file. And Hello World should print in the console, instead of import errors.
