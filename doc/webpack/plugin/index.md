### plugin 
#### plugin能做什么？和loader 的区别是什么？
- ```loader```更多的是处理文件，也就是一个转换器，```plugin```可以根据生命生命周期做更多的事情
- ```webpack```在运行过程中会广播出来很多时间，```plugin```可以监听这些生命周期，在合适时候改变```webpack```输出的值

#### webpack参数说明
- compiler 可以理解为webpack 实例
- apply webpack获取完compiler执行函数
- emit webpack 运行生命周期其中之一
- compilation 当前编译参数
- callback 回调函数，异步函数执行接收回调
- webpack 生命周期
  - entryOption  ```SyncBailHook``` 在 entry 配置项处理过之后，执行插件。
  - afterPlugins 设置完初始插件之后，执行插件。
  - afterResolvers resolver 安装完成之后，执行插件。
  - environment environment 准备好之后，执行插件。 
  - afterEnvironment environment 安装完成之后，执行插件。
  - beforeRun compiler.run() 执行之前，添加一个钩子。
  - run 开始读取 records 之前，钩入(hook into) compiler。
  - watchRun 监听模式下，一个新的编译(compilation)触发之后，执行一个插件，但是是在实际编译开始之前。
  - watchClose 监听模式停止。
  - normalModuleFactory NormalModuleFactory 创建之后，执行插件。
  - contextModuleFactory ContextModuleFactory 创建之后，执行插件。
  - beforeCompile 编译(compilation)参数创建之后，执行插件。 
  - compile 一个新的编译(compilation)创建之后，钩入(hook into) compiler。
  - thisCompilation 触发 compilation 事件之前执行（查看下面的 compilation）。 
  - compilation 编译(compilation)创建之后，执行插件。
  - shouldEmit 此时返回 true/false。
  - emit 生成资源到 output 目录之前。
  - afterEmit 生成资源到 output 目录之后。
  - done 编译(compilation)完成。
  - failed  编译(compilation)失败。

#### 手写一个plugin 
- index.js //这一个新的编译(compilation)创建之后,删除del文件夹
```
let fs = require('fs');
class MyPlugin {
    constructor(options){   
        console.log('constructor----------MyPlugin:',options)  // MyPlugin
    }
    apply(compiler){ //在初始化 compiler 对象后,再调用 myPlugin.apply(compiler) 给插件实例传入 compiler 对象。
        console.log(console.log('compiler----------compiler:',compiler))
        compiler.plugin('emit', (compilation,callback) => {
            console.log(path,'--path')
            console.log('compiler----------compilation:',compilation)
            let files = fs.readdirSync('del');
            fs.rmdirSync('del')
            return callback();
        })
    }
}
module.exports=MyPlugin;

```

- webpack.config.js
```
const MyPlugin=require('./plugin');//引入插件
module.exports = {
    entry: {
      index: './index.js'
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: [
            './loader/toUpperCase.js',
            './loader/replace.js',
          ]
        }
      ]
    },
    plugins: [
        new MyPlugin({param: 'MyPlugin'})
      ],
  }
```

- package.json
```
{
  "scripts": {
    "start": "webpack-dev-server ",
    "build": "webpack   --mode production"
  },
  "dependencies": {
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.3.1"
  },
  "name": "webpack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}

```

//https://juejin.im/post/5bbf190de51d450ea52fffd3