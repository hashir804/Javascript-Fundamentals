//three types of loops in JS

//1. for loop

for(let i=0; i<=9; i++){
    console.log(i);
}


console.log("*********************");	
//for...of loop

const array = [1,2,3,4,5];
for(const e of array){
    console.log(e);
}

console.log("*********************");


let num = [3,54,1,2,4]

for(let i=0; i<=num.length; i++){
    console.log(num[i])
}

console.log("*********************");	


//for each loop

num.forEach((element)=>{
    console.log(element* element)
})

console.log("*********************");	

// Array.from

let name ="hashir";
let arr= Array.from(name);
console.log(arr);


// For off Loop


for (let i of num){
    console.log(i)
}

console.log("*********************");

// for in loop

for (let i in num){
    console.log(i)
}