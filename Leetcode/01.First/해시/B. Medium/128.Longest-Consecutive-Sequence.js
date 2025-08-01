/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums)
    let max = 0

    // set을 순회하는 이유는 num에 중복값을 제거한 상태이기에. 그냥 nums를 순회하면 시간 초과 발생
    for (let num of set) {

        // 현재 값 밑 바로 아래 값이 set에서 없으면 현재 num은 시작값
        if (!set.has(num - 1)) {
            let count = 1
            let toCheck = num

            while (set.has(toCheck + 1)) {
                count++
                toCheck++
            }

            max = Math.max(max, count)
        }
    }

    return max
};