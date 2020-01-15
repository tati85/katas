const someArr2 = [
    ['L', 'z', 'x', 'C', 'v', 'B'],
    ['t', 'i', 'I', 'p', 'e', '7'],
    ['w', 'y', 's', 'r', 'm', 'x'],
    ['q', 'U', 'l', 'b', 'k', 'H'],
    ['A', 'i', 'G', 'Y', 'o', 'L'],
    ['n', 'f', 'd', 'W', 'z', 'n']
];

function concatSecondDiagonal(arr) {
    return arr.reduce((acc, val, i) => {
        return acc.concat(val.reverse()[i])
    }, "");

}

// solution:
console.log(concatSecondDiagonal(someArr2));
// ==> "Berlin"