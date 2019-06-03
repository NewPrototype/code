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
    execute=function(){
        setTime&&clearTimeout(setTime);
        setTime=setTimeout(()=>{
            while (callbacks.length>0) {
                callbacks.shift()(value)
            }
        },0)
    }
    this.then=function(resolved,rejected){
        if(state=='pending'){
            callbacks=[...callbacks,...[resolved,rejected]].filter(v=>!!v);
        }else if(state=='resolved'){
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