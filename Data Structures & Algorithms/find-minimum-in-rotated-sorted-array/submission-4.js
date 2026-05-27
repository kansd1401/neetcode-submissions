class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums[0] < nums[nums.length-1] || nums.length === 1) return nums[0]
        let min = 0, max = nums.length - 1,mid = Math.floor(nums.length/2)
        while(min < max) {
            if(nums[mid - 1] > nums[mid]) {
                return nums[mid]
            }
            if(nums[mid + 1] < nums[mid]) {
                return nums[mid + 1]
            }
            if(nums[mid] < nums[max]) {
                max = mid
                mid = mid - Math.floor(max - mid/2)
            } else {
                min = mid
                mid = mid + Math.floor((max - min)/2)
            }
        }
    }
}
