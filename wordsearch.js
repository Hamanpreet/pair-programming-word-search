const transpose = function (matrix) {
    let arr1 = [];
    let arr = [];
    let l1 = matrix[0].length;
    let l2 = matrix.length
    for (let i = 0; i < l1; i++) {
      arr1 = [];
      for (let y = 0; y < l2; y++) {
        arr1.push(matrix[y][i]);
      }
      arr.push(arr1);
    }
    return arr;
  };
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