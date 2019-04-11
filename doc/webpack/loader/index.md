### loader 


#### 什么是loader
- loader是文件加载器，处理匹配格式文件，比如压缩，编译、修改文件内容等操作，每个文件都会走一遍
- loader 执行顺序是从loader 数组中最后==>最前,最后loader先指向，参数是原文件，依次后面loader 接收前面loader 返回作为参数进行处理

#### 手写loader

- 数据  文件名``` test.txt``` 内容```hello world  ``` 文件名```test2.txt``` 内容 ```hello javascript ```

- replace.js 文字替换
```
module.exports=function (str){
    console.log(str,'---------------- source src ')
    const newStr=str.replace(/hello/g,'hi')
    console.log(newStr,'----------------new str')
    return newStr;
}
```
- toUpperCase.js 改为内容为大写
```
module.exports=(str)=>{
    console.log(str,'------------- source str')
    const newStr=str.toUpperCase();
    console.log(newStr,'-------------- new  toUpperCase')
    return `module.exports = '${newStr}'`;
}
```
- webpack 配置
```
module.exports = {
    entry: {
      index: './index.js'
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: [
            './loader/toUpperCase.js',   //第二执行
            './loader/replace.js',      //第一执行
          ]
        }
      ]
    }
  }

```
- package.json
```
{
  "scripts": {
    "start": "webpack-dev-server "
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

- 运行 ```yarn  start || npm start ```  
![](https://user-gold-cdn.xitu.io/2019/4/11/16a0b9cbfdcda16e?w=1312&h=568&f=png&s=221944)