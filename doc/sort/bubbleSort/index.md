### 冒泡排序
冒泡排序:遍历数组，如果当前比后一个大，则交换位置，然后继续遍历

```
const bubbleSort=(arr)=>{
    let len=arr.length;
    for(let i=0;i<len;i++){
        for(let j=i;j<len;j++){
            if(arr[j]<arr[i]){
                [arr[j],arr[i]]=[arr[i],arr[j]];
            }
        }
    }
    return arr
};

const testArr=[9,7,8,20,5,2,9,7,8,20,5,];
console.time('a')
bubbleSort(testArr);
console.timeEnd('a')
```