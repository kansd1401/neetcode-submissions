class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hash = []

        for(let ch of s) {
            switch(ch) {
                case '(':
                case '[':
                case '{':
                    hash.push(ch)
                    break
                case ')':
                    if(hash[hash.length - 1] !== "(") return false
                    hash.pop()
                    break
                case ']':
                if(hash[hash.length - 1] !== "[") return false
                    hash.pop()
                    break
                case '}':
                if(hash[hash.length - 1] !== "{") return false
                    hash.pop()
                    break
            }
        }

        return hash.length === 0;
    }
}
