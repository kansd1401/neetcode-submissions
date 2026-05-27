class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length === 1) return nums[0] === target ? 0 : -1
        let min = 0, max = nums.length - 1
        while(min < max) {
            const mid =  Math.floor((max + min)/2)
    
            if(nums[mid] === target) {
                return mid
            } 
            if(nums[min] === target) {
                return min
            } 
             if(nums[max] === target) {
                return max
            } 
            if(min === mid || max === mid) return -1
            if((nums[min] < nums[mid] ? (nums[min] < target && nums[mid] > target) : (nums[min] < target || nums[mid] > target))) {
                max = mid
            } else {
                min = mid
            }
            
        }

        return -1
    }
}
