const debounce=(fn,time=800,...res)=>{
    let setTime=null;
    return ()=>{
        if(setTime){
            clearTimeout(setTime);
            setTime=null;
        }
        setTime=setTimeout(()=>{
            fn();
            clearTimeout(setTime);
            setTime=null;
        },time)
    }
};

const time=[1000,800,500]

setInterval(debounce(()=>{
    console.log('-----1',+new Date())
}),1000)
