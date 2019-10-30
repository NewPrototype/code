

2019-10-1
第1题：给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
示例：
```
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

```
function sum(arr,target){
  const len=0;
  let index=len;
  let disabled=[];
  let args=[];
  while (index<arr.length) {
    console.log(disabled,'--123')
    if(!disabled.includes(index)){
      var endValue=arr[index];
      const startIndex=arr.findIndex(v=>v+endValue==target)
      if(startIndex>-1&&!disabled.includes(startIndex)){
        disabled.push(index,startIndex)
        args.push(index,startIndex);
      }
    }
    index++
  }
  return args 
}
sum([2, 7, 11, 15,8,2,1],9)
```

2019-10-30
第2题：将 '10000000000' 形式的字符串，以每 3 位进行分隔展示 '10.000.000.000';
```

```
