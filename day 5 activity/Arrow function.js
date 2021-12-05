//Print odd numbers in an array using arrow function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let OddNumbers = numbers.filter(number => number % 2);
console.log(OddNumbers);




//Sum of all numbers in an array using arrow function

const sum = [1,2,3,4,5,6,7].reduce((a,b) => a + b, 0);
console.log(sum);




//Return all the prime numbers in an array using arrow function

const Array = [1,2,3,4,5,6,7,8,9,10];
const newArray = Array.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(newArray);



//Return all the palindromes in an array using arrow function

const Palindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(Palindromes(["tenet","mom","good"]));




//Convert all the strings to title caps in a string array using arrow function

const str = (words) =>words.replace(/\b[a-z]/g, (x) => x.toUpperCase());
console.log(str("i am a web developer"));