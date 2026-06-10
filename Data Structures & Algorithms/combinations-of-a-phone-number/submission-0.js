
const keypad = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return []
        let currList = keypad[digits[0]].split('');
        
        for(let i = 1; i < digits.length; i++ ) {
            const num = digits[i]
            const keys = keypad[num]
            const temp = []
            for(let com of currList) {
                for(let char of keys) {
                    temp.push(com + char)
               }
            }
             currList = temp
        }
        return currList
    }
}
