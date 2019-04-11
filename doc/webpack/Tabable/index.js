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
 } = require("./node_modules/tapable");


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


car.hook.pop.tapAsync('Async',(e1,e2,callback)=>{
    setTimeout(()=>{
        console.log(e1,e2) //1,2
        callback()
    },1000)
})
car.hook.pop.callAsync('hello','async',(err)=>{
})

car.hook.pop.tapPromise('Async promise',(e1,e2)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log(e1,e2) //1,2
            resolve()
        },1000)
    })
    
})
car.hook.pop.promise('hi','promise').then(e=>{},error=>{})

