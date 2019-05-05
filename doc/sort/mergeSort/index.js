


const merge = (left, right) => {
    var result = new Array();
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    // while (left.length>0) {
    //     result.push(left.shift())
    // }
    // while (right.length>0) {
    //     result.push(right.shift())
    // }
    
    if (left.length > 0) {
        result = [...result, ...left]
        left = [];
    }
    if (right.length > 0) {
        result = [...result, ...right]
        right = [];
    }
    return result;
};

const mergeSort = (testArr) => {
    if (testArr.length < 2) {
        return testArr;
    }
    const index = Math.floor(testArr.length / 2);
    const left = testArr.slice(0, index);
    const right = testArr.slice(index);
    return merge(mergeSort(left), mergeSort(right))
}

const testArr = [9, 7, 8, 5, 3, 4, 6, 8, 9, 8, 1, 7, 5];

console.log(mergeSort(testArr),'------')
