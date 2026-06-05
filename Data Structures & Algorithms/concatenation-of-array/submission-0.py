class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        ans=[0]*(len(nums)*2)
        count=0
        for i in nums:
            ans[count]=i
            ans[count+len(nums)]=i
            count+=1
        return ans