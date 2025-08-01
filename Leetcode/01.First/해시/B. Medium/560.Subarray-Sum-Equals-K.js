/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = new Map()
    map.set(0, 1)

    let count = 0
    let sum = 0

    nums.forEach(num => {
        sum += num

        const range = sum - k
        if (map.has(range)) {
            count += map.get(range)
        }
        map.set(sum, (map.get(sum) || 0) + 1)

    })

    return count
};