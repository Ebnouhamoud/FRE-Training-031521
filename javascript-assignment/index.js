//1. Write a JavaScript function that reverse a number. 
// Example x = 32243;Expected Output : 34223

const func1 = (num) => {
  return parseInt(`${num}`.split('').reverse().join(''))
}
console.log(func1(4567))


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run.

const func2 = (str) => str === str.split('').reverse().join('')

console.log(func2('ham ebnou! !uonbe mah'))

//3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog' Expected Output : d,do,dog,o,og,g 

const func3 = (arr) => {
  const result = [];
  for(let i=0;i<arr.length;i++){
    let 
  }
}