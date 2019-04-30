// 逻辑类似于打牌,oldArr是手中的牌，然后每次拿牌放入手中的时候，都要和手中的牌对比，然后插入到相应位置
const insertionSort=(arr)=>{
    if(!Array.isArray(arr)){throw new Error('insertionSort 参数不是数组') };
    let oldArr=[];
    for (let i=0,len=arr.length;i<len;i++){ 
        let index=oldArr.findIndex(v=>{return v>arr[i]});
        if(index==-1){
            oldArr.push(arr[i])
        }else {
            oldArr.splice(index,0,arr[i]);
        }
    }
    return oldArr
};



const insertionSort2=(arr)=>{
    if(!Array.isArray(arr)){throw new Error('insertionSort 参数不是数组') };
    let oldArr=[arr[0]];
    for (let i=0,len=arr.length;i<len;i++){ 
        for(let j=0;j<oldArr;j++){
            if(arr[i]<oldArr[j]){
                oldArr.splice(j,0,arr[i]);
                break;
            }else if(j === i - 1){   // i = 0 1,2,3,4,5,6  
                // 这个条件指的是 j是oldArr数组最后一位的时候,arr[i]无法满足第一个条件  arr[i]<oldArr[j] ,那么把arr[i]加入到oldArr数组中
                oldArr.push(arr[i]);
                break;
            }
        }
    }
    return oldArr
};
const testArray=[5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3];



console.time('2')
console.log(insertionSort2(testArray))
console.timeEnd('2')



console.time('1')
console.log(insertionSort(testArray));
console.timeEnd('1')

