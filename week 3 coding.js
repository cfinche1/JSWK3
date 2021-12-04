//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the 
//value in the last element of the array (do not use numbers to reference the last 
//element, find it programmatically, ages[7] – ages[0] is not allowed). Print the 
//result to the console.
console.log(ages[ages.length-1]-ages[0]);

//Add a new age to your array and repeat the step above to ensure it is dynamic 
//(works for arrays of different lengths).
ages.push(36);
document.write(ages);
    
    console.log(ages[ages.length-1] - ages[0]);

// Use a loop to iterate through the array and calculate the average age. Print the 
//result to the console.
let sum = 0;

for(let i = 0; i <= ages.length-1; i++) {
    sum += ages[i];
}

let averageAge = sum/ages.length;
console.log(averageAge);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, 
//‘Sally’, ‘Buck’, ‘Bob’
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Use a loop to iterate through the array and calculate the average number of letters 
//per name. Print the result to the console. 
let total = 0;
let averageNumbers = 0;
    
for (let i = 0; i <= names.length-1; i++) {
    total = total + names[i].length;
    }

averageNumbers = total/names.length;
console.log (averageNumbers);

//Use a loop to iterate through the array again and concatenate all the names 
//together, separated by spaces, and print the result to the console.
let resultString = "";

for (var i = 0; i < names.length-1; i++)
    resultString += names[i] + ", ";
resultString += names[names.length-1];

console.log(resultString);

//How do you access the last element of any array?
console.log(names [5]);

//How do you access the first element of any array?
console.log(names [0]);

//Create a new array called nameLengths. Write a loop to iterate over the previously 
//created names array and add the length of each name to the nameLengths array
let namesLengths = [3, 5, 3, 5, 4, 3]; 

names.forEach ((num1, index) => {
  const num2 = namesLengths[index]; 
  console.log(num1, num2); 
});
  
//Write a loop to iterate over the nameLengths array and calculate the sum of all the 
//elements in the array. Print the result to the console.
for (let i= 0; i < namesLengths.length; i++) {
    sum += namesLengths[i];
}
console.log(namesLengths);

//Write a function that takes two parameters, word and n, as arguments and returns the 
//word concatenated to itself n number of times
function twoParameters(word, n) {
    let newWord = ""
    for(let i = 0; i < n; i++){
        newWord += word;
    }
    console.log(newWord);
   }

twoParameters("Hello", 3)

//Write a function that takes two parameters, firstName and lastName, and returns a full 
//name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}

let firstName = "Cynthia";
let lastName = "Fincher";

fullName(firstName, lastName)

//Write a function that takes an array of numbers and returns true if the sum of all the 
//numbers in the array is greater than 100. 
function arrayOfNumbers(array) {
   let sum = 0;
   for (let i = 0; i < array.length; i++); {
       sum += array[i];
   }
    if (sum > 100);
    console.log(true);
}
let numbers = [500, 8, 10]
arrayOfNumbers(numbers)

//Write a function that takes an array of numbers and returns the average of all the 
//elements in the array. 
function averageArrayOfNumbers(array) {
    let sumOfArray = 0;
    for(let i = 0; i < array.length; i++) {
      sumOfArray += array[i];
    }
    console.log(sumOfArray/array.length);
}

averageArrayOfNumbers(numbers)

//Write a function that takes two arrays of numbers and returns true if the average of the 
//elements in the first array is greater than the average of the elements in the second array
function twoArrayOfNumbers (array1, array2) {
    let one = array1.length;
    let total = 0;
    
    for(let i = 0; i <= one; i++){
        total += array1[i];
    }
    averageOfOne = total/one;

    let two = array2.length;
    let total1 = 0;

    for(let i=0; i <= two; i++){
        total1 += array2[i];
    }
    averageOfTwo = total1/two;

    if(averageOfOne > averageOfTwo);{
    console.log(true);
    }
}

let prices = [100, 202];
let prices1 = [10, 22];

twoArrayOfNumbers(prices, prices1)

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
//moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 
//10.50
function willBuyDrink (isHotOutside, moneyInPocket) {
    if(isHotOutside == true && moneyInPocket == 10.50){
        console.log(true);
    }
}

willBuyDrink(true, 10.50)

//Create a function of your own that solves a problem: function similar to #7, just with one extra parameter.
function strugglingWith(word1, word2, n){
    let string = ""
    for(let i = 0; i < n; i++){
        string += (word1 + word2);
    }
    console.log(string);
   }

strugglingWith("functions", "arrays", 10)
