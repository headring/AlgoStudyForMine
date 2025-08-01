/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }

    }

    const sorted = [...map].sort((a, b) => b[1] - a[1])

    return sorted.slice(0, k).map(item => item[0])
};