const getArrayOfColumn = (arr, n) => arr.map((x) => x[n]);

const twoDimensionalArray = [
  [7,5,6],
  [7,1,2],
  [8,5,5],
];


console.log(getArrayOfColumn(twoDimensionalArray, 0));