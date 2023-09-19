class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numMap={}
        n = len(nums)

        for i in range(n):
            x = target - nums[i]
            if x in numMap : 
                return [numMap[x],i]
            numMap[nums[i]]=i
        return []
        