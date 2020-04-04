// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.


function cleanString(s) {
    return [...s].reduce(reduceMy, []).join('');
};

function reduceMy(a, v) {
    return v === '#' ? (a.pop(), a) : (a.push(v), a)
}