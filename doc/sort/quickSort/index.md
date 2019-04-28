### 快速排序
快速排序是找好一个基点，然后遍历数组与这个基点对比，比这个基点小的放入到```left``` 集合中，其他的放入到```right``` 集合中，然后递归

```
const quickSort=(arr)=>{
    if(arr.length<=1){return arr}   //递归中断条件
    let pivotIndex=Math.floor(arr.length/2);  //获取当前数组的基点下标
    let pivot=arr.splice(pivotIndex,1)[0];  //然后获取基点的值
    let left=[],right =[];  //left:比基点小的集合,right :大于等于基点的集合
    for (var i = 0; i < arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),...[pivot],...quickSort(right)]  //递归
};

const testArray=[85,24,63,15,9];
console.log(quickSort(testArray)) // [ 9, 15, 24, 63, 85 ]

```