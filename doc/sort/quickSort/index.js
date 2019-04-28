const quickSort=(arr)=>{
    if(arr.length<=1){return arr}
    let pivotIndex=Math.floor(arr.length/2);
    let pivot=arr.splice(pivotIndex,1)[0];
    let left=[],right =[];
    for (var i = 0; i < arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left),...[pivot],...quickSort(right)]
};

const testArray=[85,24,63,15,9];


console.log(quickSort(testArray))