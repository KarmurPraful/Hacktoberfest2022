function getUnique(arr) {

    let uniqueArr = [];

    // loop through array
    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3, 5, 6, 6];
getUnique(array);

/* 
For Example :

Input : array = [1, 2, 3, 2, 3, 5, 6, 6]

Output:[1, 2, 3, 5, 6]
*/