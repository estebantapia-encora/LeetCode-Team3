class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        leftPointer = 0
        strArray = list(s)
        length = 0
        hash = set()

        for i in range(len(strArray)):
            while strArray[i] in hash:
                hash.remove(strArray[leftPointer])                
                leftPointer += 1
            hash.add(strArray[i])
            length = max(length, len(hash))
        
        return length
            