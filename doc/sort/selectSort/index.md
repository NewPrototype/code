### 选择排序
工作原理是：首先在未排序列中查找最小的值，和第一个值替换，然后从第二个值开始找最小值，然后最小值和第二值替换，依次类推
```
const selectSort=(arr)=>{
    if(!Array.isArray(arr)){throw new Error(`selectSort 参数不是数组`)};
    for(let i=0,len=arr.length;i<len;i++){
        let k=i;
        for(let j=i;j<len;j++){
            if(arr[j]<arr[k]){  //k 表示最小的值,这里是关键点
                k=j;
            }
        }
        if(k!==i){  
            [arr[i],arr[k]]=[arr[k],arr[i]];  //数组交换
        }
    }
    return arr
}

const testArr=[8,20,15,7,14];

console.log(selectSort(testArr))


```