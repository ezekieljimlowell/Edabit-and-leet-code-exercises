/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; i < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
            else {
                return false;
            }
        }
    }
};

console.log(twoSum([1, 2, 3, 4, 5], 7))