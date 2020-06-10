//What is an anagram? Well, two words are anagrams of each other if they both contain the same letters
//Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

function anagrams(word, words) {
    return words.filter(w => (w.split('').sort().join() === word.split('').sort().join()) ? w : null);
}