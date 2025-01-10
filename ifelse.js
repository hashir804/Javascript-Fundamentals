// function  checkAge(age){
//     if(age >18){
//         console.log("You are eligible to vote");
//     }

//     else{
//         console.log("You are not eligible to vote");
//     }
// }

// checkAge(10);
// checkAge(20);



// //
// function checkNumber(num){
//     if(num>=1){
//         console.log("The number is positive")
//     }

//     else if(num<=-1){
//         console.log("The number is Negative")
//     }

//     else{
//         console.log("The number is zero")
//     }
// }

// checkNumber(10);
// checkNumber(-10);
// checkNumber(0);


// //netsed if else

// function checkGrade(score){
    
//     let grade;
//     if(score>=90){
//         grade = "A";
//     }

//     else{
//         if(score >=80){
//             grade = "B";	
//         }

//         else{
//             if(score >=70){
//                 grade = "C";
//             }

//             else{
//                 grade = "D";
//             }
//         }
//     }

//     console.log("Your grade is: "+grade);
// }

// checkGrade(9);
// checkGrade(70)


// the else is associate with the last if statemen

// let browser = "chrome";
// if(browser === "chrome"){
//     console.log("The browser is chrome");
// }

// if (browser === "firefox"){
//     console.log("The browser is firefox");
// }

// if(browser === "safari"){
//     console.log("The browser is safari");
// }

// else{
//     console.log("The browser is not chrome, firefox or safari");
// }


// solution
//the problem is that it will check each and every statement, it is not optmiiized

let browser = "firefox";
if(browser === "chrome"){
    console.log("The browser is chrome");
}

else if (browser === "firefox"){
    console.log("The browser is firefox");
}

else if(browser === "safari"){
    console.log("The browser is safari");
}

else{
    console.log("The browser is not chrome, firefox or safari");
}


//to solve the above problem we use switch case