function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0
    let myArr = [];
    let count = 0;
    let max = -999;
    for (let i = 0; i < s.length; i++) {
        if (myArr.includes(s[i])) {
            console.log(myArr)
            const index = myArr.findIndex(item => item === s[i]);
            console.log(index)
            myArr = myArr.slice(index+1)
            console.log(myArr)
            count = myArr.length
            myArr.push(s[i])
            console.log(myArr)
            count++
        } else {
            myArr.push(s[i])
            count++
        }
        console.log(count)
        if (count > max) {
            max = count
        }
    }
    return max
};

let s1 = "dvdf";
let s2 = "pwwkew";
//console.log(lengthOfLongestSubstring(s1)); // Output: 3
console.log(lengthOfLongestSubstring(s2)); // Output: 3