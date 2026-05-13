function canMergeArray(arr1, arr2) {
    let minArr1 = arr1[0];
    let maxArr1 = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < minArr1) {
            minArr1 = arr1[i]
        }
        if (arr1[i] > maxArr1) {
            maxArr1 = arr1[i]
        }
    }
    let minArr2 = arr2[0];
    let maxArr2 = arr2[0];
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] < minArr1) {
            minArr2 = arr2[j]
        }
        if (arr2[j] > maxArr2) {
            maxArr2 = arr2[j]
        }
    }
    if (minArr1 > minArr2 && maxArr1 < maxArr2) {
        return true
    }
    else return false;
}

canMergeArray([1, 2, 3, 4], [0, 6])
canMergeArray([3, 1], [4, 0])
canMergeArray([9, 9, 8], [8, 9])
canMergeArray([1, 2, 3, 4], [2, 3])