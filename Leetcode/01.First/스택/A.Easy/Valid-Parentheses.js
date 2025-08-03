/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const open = ["(", "{", "["];
    const matchDictionary = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    const stack = [];

    const splitedS = s.split("");
    for (let i = 0; i < splitedS.length; i++) {
        const itemString = splitedS[i];
        const matchIndex = open.findIndex((item) => item === itemString);
        if (matchIndex >= 0) {
            stack.push(itemString);
        } else {
            const stackLastItem = stack[stack.length - 1];
            if (stackLastItem === matchDictionary[itemString]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }
    return true;
};