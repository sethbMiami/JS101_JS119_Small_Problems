const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const transpose = (nestedArray) => {
  let transposeMatrix = [[], [], []];
  nestedArray.forEach(array => {
    array.forEach((number, index) => {
      if (index === 0) transposeMatrix[index].push(number);
      else if (index === 1) transposeMatrix[index].push(number);
      else transposeMatrix[index].push(number);
    });
  });
  return transposeMatrix;
};

function transpose3(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix.length; j +=1) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }
}

const transpose2 = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
      //console.log(matrix[j][i], matrix[i][j], matrix[i][j], matrix[j][i]);
    }
  }
  return matrix;
};

let newMatrix = transpose(matrix);

//console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]



transpose2(matrix);
console.log(matrix);
