const list=[0, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2];

/**
 * 打开
 * @param {*} index 
 */
const on=(index)=>{
    let Index=-1;
    for(let i=index+1;i<list.length;i++){
        if(list[i]-1!=list[index]){
            Index=i;
            break;
        }
    }
    return [index,Index]
};

/**
 * 关闭
 * @param {*} index 
 */
const off=(index)=>{
    let Index=list.length;
    for(let i=index+1;i<list.length;i++){
        if(list[i]==list[index]||list[i]<list[index]){
            Index=i;
            break;
        }
    }
    return [index,Index]


}

// console.log(on(1))
// console.log(off(11))


var s1='123451236';
var s2='123456';  


const sing=['+','-','*','/'];
const brace=['(',')'];
const number=['0','1','2','3','4','5','6','7','8','9'];

const all=[...sing,...number,...brace];


const a=(s1,s2)=>{
    let item=null;
    const len=s1.length-s2.length;
    for(let index=0;index<s1.length;index++){
        if(s1[index]!=s2[index]){
            if(s1.length>s2.length){
                item={
                    index,
                    value:s1.substr(index,len), //值很单一
                    type:'minus',
                    name:'减少',

                }
            }
            if(s1.length<s2.length){
                item= {
                    index,
                    value:s2.substr(index,-len),
                    type:'add',
                    name:'增加'
                }
            }
            
            break;
        }
    }
    return item
}

const b=a(s1,s2);

const isPositiveNumber= value => {
    const pattern = /^\d+$|^\d*\.\d+$/g;;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/ 
    return pattern.test(value);
  };

  const c= value => {
    const pattern = /^[\+\-\*/()]+[0-9]*$/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/ 
    return pattern.test(value);
  };

if(b){
    if(isPositiveNumber(b.value)||c(b.value)){
        // console.log(s1[b.index-1],s1[b.index+1])
        if(b.type=='minus'){
            console.log(`减少值为：${b.value}，下标从${b.index}开始`)
        }else if(b.type=='add'){
            console.log(`增加值为：${b.value}，下标从${b.index}开始`)
        }
    }else {
        console.log('----值错误')
    }

}

console.log(a(s1,s2))

console.log(isPositiveNumber('1123.212'),c('+---/*()（）'))





// const timeGetData=()=>{
//     const list=[4000,1000,200];
//     let _i=0;
//     let _setTime=null;
//     const fn=()=>{
//         _i++;
//         clearInterval(_setTime);
//         if(_i==list.length){
//             return 
//         }
//         _setTime=setInterval(fn,list[_i]);
//     }
//     _setTime=setInterval(fn,list[_i])
// };
// timeGetData();





