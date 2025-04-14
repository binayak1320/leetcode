class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum_Bruteforce(nums, target) {
        for(let i = 0; i < nums.length - 1; i++){
            let sum = 0;
            for(let j = i + 1; j < nums.length; j++){
                sum = nums[i] + nums[j];
                if(sum === target) return [i, j]
            }
        }
        return []
    }
    //Hashmap (TWO pass)
    twoSum_hashMap_TwoPass(nums, target) {
        const indices = {};

        for(let i = 0;i<nums.length;i++){
            indices[nums[i]] = i
        }

        for(let i = 0;i<nums.length;i++){
            const diff = target - nums[i];

            if(indices[diff] !== undefined && indices[diff] !== i){
                return [i, indices[diff]]
            }
        }
        console.log(indices)
        return []
    }
      //Hashmap (One pass)
      twoSum_hashMap_OnePass(nums, target) {
       const prevMap = new Map();

        for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i];
            if(prevMap.has(diff)){
                return [prevMap.get(diff), i]
            }
            prevMap.set(nums[i], i)
        }
    }
}

// Test case
const solution = new Solution();
const nums = [2, 7, 11, 15];
const target = 9;
const result = solution.twoSum_Bruteforce(nums, target);
console.log(result); // Output: [0, 1]

const result_map_twoPass = solution.twoSum_hashMap_TwoPass(nums, target);
console.log(result_map_twoPass); // Output: [0, 1]

const result_twoSum_hashMap_OnePass = solution.twoSum_hashMap_OnePass(nums, target);
console.log(result_twoSum_hashMap_OnePass); // Output: [0, 1]