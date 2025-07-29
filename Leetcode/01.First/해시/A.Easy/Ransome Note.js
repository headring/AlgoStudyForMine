/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const dict = {};
    magazine.split("").forEach((item) => {
        if (dict[item]) {
            dict[item] += 1;
        } else {
            dict[item] = 1;
        }
    });

    const ransomNoteSpited = ransomNote.split("");
    for (item of ransomNoteSpited) {
        if (typeof dict[item] === "undefined" || dict[item] === 0) {
            return false;
        } else {
            dict[item] -= 1;
        }
    }

    return true;
};