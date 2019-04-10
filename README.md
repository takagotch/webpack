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



compiler.hooks.compile.tap('MyPlugin', params => {
  console.log('Synchronously tapping the compile hook.');
});

compiler.hooks.run.tapAsync('MyPlugin', (source, target, routesList, calback) => {
  console.log('Asynchronously tapping the run hook.');
  callback();
});

compiler.hooks.run.tapPromise('MyPlugin', (source, target, routesList) => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
    console.log('Asynchronously tapping the run hook with a delay.');
  });
});

compiler.hooks.run.tapPromise('MyPlugin', async (source, target, routesList) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Asynchronously tapping the run hook with a delay.');
});

const SyncHook = require('tapable').SyncHook;

if (compiler.hooks.myCustomHook) throw new Error('Already in use');
compiler.hooks.mycustomHook = new SyncHook(['a', 'b', 'c']);

compiler.hooks.mycustomHook.call(a, b, c);

compiler.hooks.emit.tapAsync({
  name: 'MyPlugin',
  context: true
}, (context, compiler, callback) => {
  const reportProgress = context && context.reportProgress;
  if (reportProgress) reportProgress(0.95, 'Starting work');
  setTimeout(() => {
    if (reportProgress) reportProgress(0.95, 'Done work');
    callback();
  }, 1000);
});

reportProgress(percentage, ...args);

module.exports = {
  mode: 'production',
}

module.exports = {
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new ModuleConcatenationPlugin(),
    new DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
    new UglifyJsPlugin()
  ],
}

module.exports = {
  plugins: [
    new NamedModulePlugin()
  ],
}

module.exports = {
  plugins: [
    new NoErrorPlugin(),
    new NesWatchingPlugin()
  ]
}

module.exports = {
  sayHello: () => {
    console.log('hello world');
  }
};

function sayHello() {
  import('./non-esm.js').then(module => {
    module.default.sayhello();
  });
}

module.exports = {
  rules: [
    {
      test: /config\.json$/,
      loader: 'special-loader',
      type: 'javascript/auto',
      options: {...}
    }
  ]
};

module.exports = {
  rules: [
    {
      test: /\.json$/,
      loader: 'json-loader'
    }
  ]
};
```


```
```


