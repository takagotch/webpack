### webpack
---
https://github.com/webpack/webpack

https://webpack.js.org/

```js
import bar from './bar';
bar();

export default function bar(){
}

const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

```

```
<!doctype html>
<html>
  <head>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

```js
import MyModule from './my-module.js';
import { NamedExport } from './other-module.js';

export var Count = 5;
export function Multiply(a, b) {
  return a * b;
}
```


```
```

