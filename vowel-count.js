//my solution for vowel count
function getCount(str) {
    var vowelsCount = 0;
    var output = str.split('');
    // enter your majic here
    vowelsCount = output.filter(letter => 'aeiou'.includes(letter)).length;
    return vowelsCount;
}


//best solution
function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}