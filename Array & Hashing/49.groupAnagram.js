class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let myHash = {};

    for (let i = 0; i < strs.length; i++) {
      let item = strs[i].split("").sort().join();
      if (item in myHash) {
        myHash[item].push(strs[i]);
      } else {
        myHash[item] = [strs[i]];
      }
    }
    let output = [];
    for (let key in myHash) {
      output.push(myHash[key]);
    }
    return output;
  }
}

// Test case
const solution = new Solution();
const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
const result = solution.groupAnagrams(strs);
console.log(result); // Output: [0, 1]
