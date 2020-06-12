//You are provided with array of positive non-zero ints and int n representing n-th power (n >= 2).

For the given array, calculate the sum of each value to the n - th power.Then subtract the sum of the original array.

Example 1: Input: { 1, 2, 3 }, 3-- > (1 ^ 3 + 2 ^ 3 + 3 ^ 3) - (1 + 2 + 3) -- > 36 - 6-- > Output: 30

function modifiedSum(a, n) {
    return a.reduce((acc, val) => acc += Math.pow(val, n), 0) - a.reduce((ac, v) => ac += v, 0)
}