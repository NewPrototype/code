module.exports=function (str){
    console.log(str,'---------------- source src ')
    const newStr=str.replace(/hello/g,'hi')
    console.log(newStr,'----------------new str')
    return newStr;
}