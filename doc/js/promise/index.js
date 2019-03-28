// console.log('1');
// setTimeout(()=>{
//     console.log('-2')
// })


// new Promise(()=>{

// })



setTimeout(function(){console.log(1)},0);
new Promise(function(resolve){
    console.log(2)
    for( var i=0 ; i<10000 ; i++ ){
        i==9999 && resolve()
    }
    console.log(3)
}).then(function(){
    console.log(4)
});
console.log(5);

