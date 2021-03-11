const transpose = function (matrix) {
  let columnLength = matrix.length;
  let rowsLength = matrix[0].length;

  let newArr1 = []
  for (let i = 0; i < rowsLength; i++) {
    let temp = [];
    for (let j = 0; j < columnLength; j++) {
      temp.push(matrix[j][i]);
    }
    newArr1.push(temp)
  }
  return newArr1;
};

const wordSearch = (letters, word) => {
  if (letters.length < 1) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''))
  let answer = false;
  //console.log(horizontalJoin)
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      answer = true;
    }
  }

  const matrixed = transpose(letters)
  const horizontalJoinMatrix = matrixed.map(ls => ls.join(''))
  for (l of horizontalJoinMatrix) {
    if (l.includes(word)) {
      answer = true;
    }
  }


  return answer;
};


module.exports = wordSearch

//a function that received 2d array of letters and a word. Our funcion must find the word horizontally and vertically. return true if found, else return false. 

//When the present tests are successful, ask yourself, "Do the current tests cover all the possible cases?" What if the word is written vertically, not horizontally? What about the case where the word matrix is an empty array? You'll have to write tests for these cases (and any others that you think of), and you might also have to modify the wordSearch function to make those new tests pass.