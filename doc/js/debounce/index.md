#### debounce:将触发频繁的事件合并成一次执行,debounce适用于诸如input事件，当用户输入时需要响应ajax请求，多次input只响应一次回调方法


const debounce=(fn,time=800,...res)=>{
    let setTime=null;
    return ()=>{
        if(setTime){
            clearTimeout(setTime);
            setTime=null;
        }
        setTime=setTimeout(()=>{
            fn(...res);
            clearTimeout(setTime);
            setTime=null;
        },time)
    }
};



setInterval(debounce(()=>{
    console.log('-----1',+new Date())
}),1000)