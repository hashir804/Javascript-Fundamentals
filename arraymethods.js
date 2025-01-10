//1.map

let numbers =[1,2,3,4,5]
numbers.map((num) => {
    console.log(num*2);
})

// F -> C

let fahrenheit = [0,32,45,50,75,80,99,120];
let celcius = fahrenheit.map((f) => {
    return Math.round((f-32)*5/9);
});

console.log(celcius);


//2. filter

let numbers1 = [1,2,3,4,5,6,7,8,9,10];
let evennum = numbers1.filter((num) => {num%2==0});
console.log(evennum);

//3. reduce
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum= arr.reduce((prev,cur)=> cur= prev+cur);
console.log(arr);
console.log(sum);


//4. every
let num=  [1,2,3,4,5]
let fun= num.every((num) =>num<10);
console.log(num);
console.log(fun);

//5. some
let num1= [6,7,8,20,10]
let fun1= num1.some((num1) =>num1>10);
console.log(num1);
console.log(fun1);

//6. find
let num2=[1,2,3,4,5]
let fin = num1.find((num2) => num2>3);
console.log(num2);
console.log(fin);

console.log("*******************");

//7. Indexof
let num3=[1,2,3,4,5]
let ind = num3.indexOf(5)
console.log(num3);
console.log(ind);
