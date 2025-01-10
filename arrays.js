// Declaration of an array

let myArray=[];  //empty array


let lang = ["Java", "python", "JS"];

// 1. PUSH

lang.push("Ruby");
console.log(lang);

// 2. POP (remove last element form array and reuturns it)

let numbers = [1,2.3,4,5]  // an array with numbers
numbers.pop();
console.log(numbers);


//3. SHIFT (remove first element from array and returns it)

let fruits = ["apple","banana","mango","orange"] // an array with strings
let firstfruit = fruits.shift();
console.log(firstfruit);


//4. UNSHIFT (add element to the beginning of the array)

let colors = ["red","green","blue"];
colors.unshift("Yellow", "pink");
console.log(colors);
console.log(colors.length);


//5. SPLICE (add or remove elements from array)

let months = ["Jan","March","April","June"];
months.splice(1,0,"Feb");
console.log(months);


//6. SLICE (extracts a section of the array and returns a new array)
let pop =[1,2,3,4,5];
let newPop= pop.slice(1,4);  //start from index 1 and end at index 4
console.log(newPop);


//7. CONCAT (merge two or more arrays)

let fr = ["apple","banana","mango"];
let veg = ["potato","tomato","onion"];

let food = fr.concat(veg);
console.log(food);

//8. INDEXOF (returns the first index at which a given element can be found in the array, or -1 if it is not present)   
let colors1 = ["red","green","blue","yellow","red"];
let indexRed= colors1.indexOf("green");
console.log(indexRed);


// 2nd Red index:
let redSecondIndex= colors.indexOf("red",2);
console.log(redSecondIndex);

arr= [1,2,3,4,5,6,7,8,9,10];
s= arr.splice();
console.log(s)