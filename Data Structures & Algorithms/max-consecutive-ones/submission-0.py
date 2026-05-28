class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        largest_consec_val = 0
        count = 0
        for i in nums:
            if i == 1:
                count += 1
            else:
                count = 0
            largest_consec_val = max (count, largest_consec_val)

        return largest_consec_val
