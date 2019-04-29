const selectSort=(arr)=>{
    if(!Array.isArray(arr)){throw new Error(`selectSort 参数不是数组`)};
    for(let i=0,len=arr.length;i<len;i++){
        let k=i;
        for(let j=i;j<len;j++){
            if(arr[j]<arr[k]){
                k=j;
            }
        }
        if(k!==i){
            [arr[i],arr[k]]=[arr[k],arr[i]];
        }
    }
    return arr
}

const testArr=[8,20,15,7,14];

console.log(selectSort(testArr))

