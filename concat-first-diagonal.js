const someArr1 = [
    ['L', 'z', 'x', 'C', 'v', 'B'],
    ['t', 'i', 'I', 'p', 'e', '7'],
    ['w', 'y', 's', 'r', 'm', 'x'],
    ['q', 'U', 'l', 'b', 'k', 'H'],
    ['A', 'i', 'G', 'Y', 'o', 'L'],
    ['n', 'f', 'd', 'W', 'z', 'n']
];

function concatFirstDiagonal(arr) {
    let result = "";
    if (arr[0].length > 0) {
        for (let i = 0; i < arr[0].length; i++)
            result = result.concat(arr[i][i]);

    }
    return result;
}
// solution:
console.log(concatFirstDiagonal(someArr1));
// ==> "Lisbon"