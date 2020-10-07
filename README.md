# Webpack5 Fluent Error
Minimum repro for error of webpack bundling fluent

I get an error with webpack 5.0.0-beta.30 and higher. With beta 29 it works correctly. The error is:

```
ERROR in ./node_modules/@fluent/bundle/esm/index.js 9:0
Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (9:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|  *
|  */
> export { FluentBundle } from "./bundle.js";
| export { FluentResource } from "./resource.js";
| export { FluentType, FluentNumber, FluentDateTime } from "./types.js";
 @ ./index.js 1:0-62 2:12-24 2:26-40
 ```

To run:
```
> npm i
> npx webpack
```
