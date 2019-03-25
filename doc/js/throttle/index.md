#### throttle: 设置一个阀值，在阀值内，将触发的事件合并成一次执行；且当到达阀值，必定执行一次事件。throttle适用于resize或者鼠标移动事件，防止浏览器频繁响应事件，严重拉低性能

##### 第一种实现方式 利用计时器加状态来判断
const throttle = (fn, time = 1000, ...res) => {
    let runType = true;
    return () => {
        if (runType) {
            runType = false;
            let setTime=setTimeout(() => {
                fn(...res);
                runType = true;
                clearTimeout(setTime);
            }, time);
        }
    };
};

##### 第二种实现方式 利用当前时间时间差
const throttle2=(fn,time=1000,...res)=>{
    let currentTime=null,lastTime=+new Date();
    return ()=>{
        currentTime=+new Date();
        if(currentTime>=lastTime+time){
            fn(...res);
            lastTime=currentTime;
        }
    }
}


// 都知道计时器是宏任务，所有实际有一定误差。两种方式误差相差不大，如测试单个计时器测试会提高准确率

setInterval(throttle((e)=>{
    console.log('----throttle----------',+new Date());
}),100)


setInterval(throttle2((e)=>{
    console.log('----throttle2----------',+new Date());
}),100)


