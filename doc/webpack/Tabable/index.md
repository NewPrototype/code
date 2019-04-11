### Tabable
webpack事件流继承于Tabable
#### Tabable是什么？
Webpack可以将其理解是一种基于事件流的编程范例，一个插件合集。
而将这些插件控制在webapck事件流上的运行的就是webpack自己写的基础类Tapable。
Tapable暴露出挂载plugin的方法，使我们能 将plugin控制在webapack事件流上运行（如下图）。后面我们将看到核心的对象 Compiler、Compilation等都是继承于Tabable类

```
const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 } = require("tapable");
```
![](https://user-gold-cdn.xitu.io/2019/4/11/16a0c20cd1cb7ec5?w=1126&h=510&f=png&s=91197)

#### Tabable用法
- 新建钩子
```
const hook1 = new SyncHook(["arg1", "arg2", "arg3"]);   //new 构建函数 ,  
```
- 绑定钩子
同步: 绑定 ```tap``` 执行 ```call```
异步: 绑定 ```tapAsync/tapPromise``` 执行 ```callAsync/promise```   //必须配套出现 tapAsync==>callAsync  tapPromise==>promise

```
const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 } = require("tapable");
 class Car{
     constructor(){
        this.hook={
            push:new SyncHook(["a","b"]),   //a ,b 代表的是几个参数，不要用数字
            pop:new AsyncParallelHook(['a','b']),
        }
     };
 }

const car=new Car();
car.hook.push.tap('sync',(e,a)=>{
    console.log('--------',e,a)
})

car.hook.push.call('hello1',"2")


--------------------分割线

car.hook.pop.tapAsync('Async',(e1,e2,callback)=>{
    setTimeout(()=>{
        console.log(e1,e2) //1,2
        callback()
    },1000)
})
car.hook.pop.callAsync('hello','async',(err)=>{
})


--------------------分割线

car.hook.pop.tapPromise('Async promise',(e1,e2)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log(e1,e2) //1,2
            resolve()
        },1000)
    })
    
})
car.hook.pop.promise('hi','promise').then(e=>{},error=>{})

```

- node index.js 运行
  ![](https://user-gold-cdn.xitu.io/2019/4/11/16a0c50ed349a2b6?w=816&h=114&f=png&s=17429)