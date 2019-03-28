const object={};
var obj=new Proxy(object,{
    get:function(target,key,receiver){  //获取
        // return target[key]
        return Reflect.get(target,key,receiver)  //receiver 绑定this
    },
    set:function(target,key,value,receiver){  //设置
    //    return  target[key]=value
        return Reflect.set(target,key,value,receiver)
    },
    has:function(target,propsKey){   //  "count" in  object 
        return Reflect.has(target,propsKey)
    },
    deleteProperty:function(target,propsKey){   //delete obj[count]
        return Reflect.deleteProperty(target,propsKey)
    },
    apply:function(target,ctx,args){   //apply
        return Reflect.apply(target,ctx,args)
    }
});



const list=new Set();
const set=(target,key,value,receiver)=>{
    Reflect.set(target,key,value,receiver);
    list.forEach(fn=>{
        fn()
    })
};
const observable=(obj)=>{
    return new Proxy(obj,{set})
}

const update=()=>{
    console.log('被触发了')
}
const observe=(fn)=>{
    list.add(fn)
}
const person=observable({
    name:'张三',
})

//更新
observe(update);


person.name='李四';
console.log(person)



// obj.count=1;
// ++obj.count

// console.log("count" in  obj);
// console.log(obj)
// delete obj.count;

// console.log(obj)
