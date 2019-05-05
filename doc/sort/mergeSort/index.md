### 归并排序
思路:归并的思路是把一个数组拆分为若干个小数组，然后最小单位数组进行对比，然后合并返回出去,通过递归的方式把数组拆分为长度为1的数组，然后合并
```
const merge=(left,right)=>{
    var result = [];
    while (left.length>0&&right.length>0) {   //比如 left=[3,5],right=[2,4];   这里是把left和right项目消耗，剩余的走下面push
        if(left[0]<right[0]){                  //第一次遍历  3>2, result=[2,] left=[3,5],right=[4]
            result.push(left.shift())          //第二次遍历  3<4, result=[2,3] left=[5],right=[4]
        }else {                                //第三次遍历  5>4, result=[2,3,4] left=[5],right=[]
            result.push(right.shift())
        }
    }
    console.log(left,right)
    <!-- while (left.length>0) {                   //第四次遍历 这时候left 还有一个数，把他直接push到result 中,result=[2,3,4,5]
        result.push(left.shift())
    }
    while (right.length>0) {  
        result.push(right.shift())
        
    } -->

    if (left.length > 0) {     //下面性能好
        result = [...result, ...left]
        left = [];
    }
    if (right.length > 0) {
        result = [...result, ...right]
        right = [];
    }
    return result;
};

const mergeSort=(testArr)=>{
    if(testArr.length<2){
        return testArr;
    }
    const index=Math.floor(testArr.length/2);
    const left=testArr.slice(0,index);
    const right=testArr.slice(index);
    return merge(mergeSort(left),mergeSort(right))
}

const testArr=[9,7,8,5,3,4,6,8,9,8,1,7,5];

console.log(mergeSort(testArr),'------')

```