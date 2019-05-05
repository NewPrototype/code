#### 希尔排序
思路:希尔排量首先会获取一个间隔，比如```gap```,把数组分为下标[0,3,6],[1,4,7]然后对下标为```0,3,6```进行对比，如果后面比前面大就进行更换，知道```gap```等于1,所有元素在一个数组中，最后进行一个冒泡排序

```
const shellSort = (arr, count = 3) => {
  const len = arr.length;   //数组长度
  let gap = 1;         //  初始间隔
  while (gap < len / count) {          //动态定义间隔序列
    gap = gap * count + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / count)) {
    for (let i = 0; i < len; i++) {      //插入排序  i  0,1,2,3,4,5,6  
      for (let j = i; j >= gap; j = j - gap) {  // 1
        if (arr[j] < arr[j - gap]) {
          [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]] //类似冒泡排序中的交换位置
        }
      }
    }
  }
  return arr;
};
const testArray = [6, 4, 5, 2, 3, 6, 4, 5, 2];


shellSort(testArray)

```