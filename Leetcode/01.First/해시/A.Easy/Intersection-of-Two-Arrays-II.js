/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const numsDict = {}
    const logerNums = nums1.length > nums2.length ? nums1 : nums2
    const shorterNums = nums1.length > nums2.length ? nums2 : nums1
    shorterNums.sort((a, b) => b - a)

    for (let i = 0; i < logerNums.length; i++) {
        if (numsDict[logerNums[i]]) {
            numsDict[logerNums[i]] += 1
        } else {
            numsDict[logerNums[i]] = 1
        }
    }

    const result = []
    shorterNums.forEach(num => {
        if(numsDict[num]){
            numsDict[num]--
            result.push(num)
        }
    })

    return result
};