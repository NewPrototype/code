const bubbleSort=(arr)=>{
    let len=arr.length;
    for(let i=0;i<len;i++){
        // console.log(arr[i],'----1')
        for(let j=i;j<len;j++){
            // console.log(arr[j],'----2')
            if(arr[j]<arr[i]){
                [arr[j],arr[i]]=[arr[i],arr[j]];
                // console.log(arr[j],arr[i],'---------------')
                // console.log(arr,'----arr',arr[i])
            }
        }
    }
    return arr
};

const testArr=[9,7,8,20,5,2,];

console.time('a')
console.log(bubbleSort(testArr));
console.timeEnd('a')