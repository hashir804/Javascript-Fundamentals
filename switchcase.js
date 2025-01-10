function checkDayofWeek(dayNumber) {
    let Day;

    switch (dayNumber) {
        case 1:
            Day = "Monday";
            break;
        case 2:
            Day = "Tuesday";
            break;
        case 3:
            Day = "Wednesday";
            break;
        case 4:
            Day = "Thursday";
            break;
        case 5:
            Day = "Friday";
            break;
        case 6:
            Day = "Saturday";
            break;
        case 7:
            Day = "Sunday";
            break;
        default:
            Day = "Invalid day number";
    }

    return Day;
}

console.log(checkDayofWeek(1));
console.log(checkDayofWeek(2));
console.log(checkDayofWeek(10));





let browser = "chromeee";
switch (browser) {
    case "chrome":
        console.log("The browser is chrome");
        break;
    case "firefox":
        console.log("The browser is firefox");
        break;
    case "safari":
        console.log("The browser is safari");
        break;
    default:
        console.log("The browser is not chrome, firefox or safari");
}


//multi env:dev,qa,stage,prod
//multi user: admin, user, superuser


switch (enve) {
    case "DEV":
        console.log("The env is DEV");
        break;
    case "QA":
        console.log("The env is QA");
        break;

    case "Stage":
        console.log("The env is Stage");
        break;
        
    case "Prod":
        console.log("The env is Prod");
        break;
        
     default:
        console.log("The env is not DEV,QA,Stage or Prod");
}


switch (user) {
    case "Admin":
        console.log("The user is Admin");
        break;
    case "User":
        console.log("The user is User");
        break;
    case "SuperUser":
        console.log("The user is SuperUser");
        break;
    default:
        console.log("The user is not Admin, User or SuperUser");
}



