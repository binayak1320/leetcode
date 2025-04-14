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
    //Sorting method
    twoSum_Sorting(nums, target) {
        let A = [];
        for(let i = 0; i < nums.length; i++){
            A.push([nums[i], i])
        }
        A.sort((a, b) => a[0] - b[0]);

        let i = 0, j = nums.length - 1;
        while(i<j){
            let sum = A[i][0] + A[j][0];
            if(sum === target){
                return [A[i][1], A[j][1]]
            }else if(sum < target){
                i++;
            }else{
                j--;
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
        return []
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

const result_twoSum_Sorting = solution.twoSum_Sorting(nums, target);
console.log(result_twoSum_Sorting); // Output: [0, 1]