/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const seenDict = {}

    while (true) {
        const total = n.toString().split('').reduce(((acc, cur) => acc + Math.pow(Number(cur), 2)), 0)
        // console.log(total)
        if (total === 1) {
            return true
        }
        if (seenDict[total]) {
            return false
        }
        seenDict[total] = true
        n = total
    }

};