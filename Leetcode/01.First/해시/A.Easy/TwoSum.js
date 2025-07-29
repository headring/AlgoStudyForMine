/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        if (dict[need] !== undefined) {
            return [dict[need], i];
        }
        dict[nums[i]] = i;
    }
};

