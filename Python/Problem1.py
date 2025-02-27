class Solution:
    def __init__(self, nums1):
        self.nums1 = nums1
    def findMedianValue(self):
        nums1_len = len(self.nums1)
        if nums1_len % 2 != 0:
            median_index = nums1_len//2
            median = self.nums1[median_index]  
        else:
            first_index = (nums1_len//2) - 1
            second_index = nums1_len//2
            median = ((self.nums1[first_index] + self.nums1[second_index]) / 2)
        return median

array_1 = Solution([1,2,3,4,5,6])
print(f"The median of your array is {array_1.findMedianValue()}.")