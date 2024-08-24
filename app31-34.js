//question no 01
document.write("<h1>Question #1 <br></h1>")
var currentDate = new Date();
var dateString = currentDate.toLocaleDateString();
var timeString = currentDate.toLocaleTimeString();

document.write("Current Date: " + dateString + "<br>Current Time: " + timeString);


//question no 02
document.write("<h1>Question #2 <br></h1>")
var currentDate = new Date();
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[currentDate.getMonth()];
document.write("Current Month: " + currentMonth);

//question no 03
document.write("<h1>Question #3 <br></h1>")
var currentDate = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[currentDate.getDay()];
document.write("Today is: " + currentDay);

//question no 04
document.write("<h1>Question #4 <br></h1>")

var currentDate = new Date();
var currentDay = currentDate.getDay();
if (currentDay === 0 || currentDay === 6) {
    document.write("It’s Fun day");
}

//question no 05
document.write("<h1>Question #5 <br></h1>")
var currentDate = new Date();
var currentDay = currentDate.getDate();
if (currentDay < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}


//question no 06
document.write("<h1>Question #6 <br></h1>")
var now = new Date();  
var epoch = new Date(1970, 0, 1);  
var timeDifference = now - epoch;
var minutesSinceEpoch = Math.floor(timeDifference / (1000 * 43));
document.write("Minutes since, Jan. 1, 1970: " + minutesSinceEpoch);



//question no 07
document.write("<h1>Question #7 <br></h1>")
var currentDate = new Date();
var currentHour = currentDate.getHours();
if (currentHour < 12) {
   document.write("It's AM");
} else {
    document.write("It's PM");
}


//question no 08
document.write("<h1>Question #8 <br></h1>")
var laterDate = new Date(2020, 11, 31);
document.write("The last day of the last month of 2020 is: " + laterDate);


//question no 09
document.write("<h1>Question #9 <br></h1>")

var firstRamadan = new Date(2015, 5, 18); 
var thisYearRamadan = new Date; 
var timeDifference = thisYearRamadan - firstRamadan;
var daysSinceFirstRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write(daysSinceFirstRamadan + " " +"Days have passed since 1st Ramadan, 2015 ");

//question no 10
document.write("<h1>Question #10 <br></h1>")

var referenceDate = new Date();
var startOf2015 = new Date(2015, 0, 1); 
var timeDifference = referenceDate - startOf2015;
var secondsElapsed = Math.floor(timeDifference / 1000);
document.write("<br>Seconds elapsed between the beginning of 2015 and the reference date: " + secondsElapsed);


//question no 11
document.write("<h1>Question #11 <br></h1>")

var currentDate = new Date();
var currentHours = currentDate.getHours();
document.write("<br>Current date: " + currentDate.toString());
currentDate.setHours(currentHours - 1);
document.write("<br>1 hour ago, it was: " + currentDate.toString());


//question no 12
document.write("<h1>Question #12 <br></h1>")

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.write("<br>Current date: " + currentDate.toString());
currentDate.setFullYear(currentYear - 100);
document.write("<br>100  year ago, it was: " + currentDate.toString());

//question no 13
document.write("<h1>Question #13 <br></h1>")
var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is " + birthYear);


//question no 14
document.write("<h1>Question #14 <br></h1>")

var currentDate = new Date();
var options = { month: 'long', year: 'numeric' };
var currentMonth = currentDate.toLocaleDateString('en-US', options);


var customerName = prompt("Enter Customer Name:");
var numUnits = parseFloat(prompt("Enter Number of Units Consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
var lateSurcharge = parseFloat(prompt("Enter Late Payment Surcharge:"));


var netAmount = parseFloat((numUnits * chargesPerUnit).toFixed(2));
var grossAmount = parseFloat((netAmount + lateSurcharge).toFixed(2));


console.log("K-Electric Bill");
console.log("=================");
console.log("Customer Name: " + customerName);
console.log("Current Month: " + currentMonth);
console.log("Number of Units: " + numUnits.toFixed(2));
console.log("Charges per Unit: " + chargesPerUnit.toFixed(2));
console.log("Net Amount Payable (within Due Date): " + netAmount.toFixed(2));
console.log("Late Payment Surcharge: " + lateSurcharge.toFixed(2));
console.log("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));