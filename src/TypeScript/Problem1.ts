function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let finalArray: number[] = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            finalArray.push(nums1[i]);
            i++
        }
        else {
            finalArray.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        finalArray.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        finalArray.push(nums2[j]);
        j++;
    }
    const length = finalArray.length;
    const mid = Math.floor(length / 2);

    return length % 2 !== 0
    ? finalArray[mid]
    : (finalArray[mid - 1] + finalArray[mid]) /2;
}