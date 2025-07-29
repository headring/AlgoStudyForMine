/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    // jewls를 hash로 전환하고
    const dict = new Map()
    jewels.split('').forEach(item => {
        dict.set(item, 0)
    })


    // stones를 순회하면 체크한다
    stones.split('').forEach(stone => {
        if (dict.has(stone)) {
            dict.set(stone, dict.get(stone) + 1)
        }
    })
    return (Array.from(dict.values()).reduce((accumulator, currentValue) => accumulator + currentValue, 0))
};