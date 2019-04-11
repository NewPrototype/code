module.exports=(str)=>{
    console.log(str,'------------- source str')
    const newStr=str.toUpperCase();
    console.log(newStr,'-------------- new  toUpperCase')
    return `module.exports = '${newStr}'`;
}