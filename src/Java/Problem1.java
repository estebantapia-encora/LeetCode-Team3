class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        List<Integer> finalArray = new ArrayList<>();
        int i = 0, j = 0;
        while(i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                finalArray.add(nums1[i]);
                i++;
            }
            else {
                finalArray.add(nums2[j]);
                j++;
            }
    }
    while (i < nums1.length) {
        finalArray.add(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        finalArray.add(nums2[j]);
        j++;
    }
    int arrayLength = finalArray.size();
    if (arrayLength % 2 != 0) {
        return finalArray.get(arrayLength / 2);
    }
    else {
        return (finalArray.get(arrayLength / 2 - 1) + finalArray.get(arrayLength / 2)) / 2.0;
    }
}
}