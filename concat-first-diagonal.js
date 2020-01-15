const someArr1 = [
    ['L', 'z', 'x', 'C', 'v', 'B'],
    ['t', 'i', 'I', 'p', 'e', '7'],
    ['w', 'y', 's', 'r', 'm', 'x'],
    ['q', 'U', 'l', 'b', 'k', 'H'],
    ['A', 'i', 'G', 'Y', 'o', 'L'],
    ['n', 'f', 'd', 'W', 'z', 'n']
];

function concatFirstDiagonal(arr) {
    return arr.reduce((acc, val, i) => {
        return acc.concat(val[i])
    }, "")
}
// solution:
console.log(concatFirstDiagonal(someArr1));
// ==> "Lisbon"