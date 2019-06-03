
### promise 

#### 一种比较简易的promise

function TestPromise(fn){
    let callbacks=[],value=null,state='pending',setTime;
    resolve=function(newValue){
        value=newValue;
        state='resolved';  
        execute()
    }
    reject=function(newValue){
        value=newValue;
        state='rejected';
        execute();
    }
    execute=function(){//把promise 放入宏任务执行，比then执行慢
        setTime&&clearTimeout(setTime);
        setTime=setTimeout(()=>{   
            while (callbacks.length>0) {
                callbacks.shift()(value)
            }
        },0)
    }
    this.then=function(resolved,rejected){
        if(state=='pending'){   //同步时候比resolve 执行更快
            callbacks=[...callbacks,...[resolved,rejected]].filter(v=>!!v);
        }else if(state=='resolved'){  //当状态发生更改的时候,执行成功||失败函数
            resolved(value)
        }else if(state=='rejected'){
            rejected(value)
        }
        return this
    }
    fn(resolve,reject)
}

new TestPromise((resolve)=>{
    setTimeout(()=>{
        resolve('1')
    },100)
}).then(v=>{
    console.log(v,'--------1')
},()=>{
    console.log('--------2')
}).then((e)=>{
    console.log(e)
},)