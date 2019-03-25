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

const throttle2 = (fn, time = 1000, ...res) => {
    let currentTime = null, lastTime = +new Date();
    return () => {
        currentTime = +new Date();
        if (currentTime >= lastTime + time) {
            fn(...res);
            lastTime = currentTime;
        }
    };
};

setInterval(
    throttle(e => {
        console.log('----throttle----------', +new Date());
    }, 1000),
    100
);

// setInterval(throttle2((e)=>{
//     console.log('----throttle2----------',+new Date());
// }),100)
