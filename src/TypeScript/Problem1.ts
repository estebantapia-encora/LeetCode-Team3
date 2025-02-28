function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let finalArray: number[] = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            finalArray.push(nums1[i++]);
        }
        else {
            finalArray.push(nums2[j++]);
        }
    }
    while (i < nums1.length) {
        finalArray.push(nums1[i++]);
    }
    while (j < nums2.length) {
        finalArray.push(nums2[j++]);
    }
    const arrayLength = finalArray.length;
    if (arrayLength % 2 !== 0) {
        return finalArray[Math.floor(arrayLength / 2)];
    }
    else {
        return (finalArray[arrayLength / 2 - 1] + finalArray[arrayLength / 2]) / 2;
    }
}