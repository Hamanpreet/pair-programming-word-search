const transpose = require("../../../Week4/spoon.js");
const wordSearch = (letters, word) => { 
    if (letters.length === 0 || !word) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const transposed = transpose(letters);
    const verticalJoin = transposed.map(ls => ls.join(''));
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }  
    }
    for (let k of verticalJoin) {
        if (k.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch