class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        final_array = list(heapq.merge(nums1,nums2))
        array_length = len(final_array)
        if array_length % 2 != 0:
            return final_array [array_length // 2]
        else:
            return (final_array[array_length // 2 - 1] + final_array[array_length // 2]) / 2.0