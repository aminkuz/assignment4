//question no 01
document.write("<h1>Question #1 <br></h1>")
function displayDateTime() {
    var now = new Date();
    var dateTime = now.toLocaleString();
    document.write("Current Date and Time: " + dateTime);
}
displayDateTime();


//question no 02
document.write("<h1>Question #2 <br></h1>")
function greetUser() {
    var firstName = prompt("Please enter your first name:");
    var lastName = prompt("Please enter your last name:");
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "! Welcome!");
}
greetUser();


//question no 03
document.write("<h1>Question #3 <br></h1>")
function addTwoNumbers() {
    var num1 = parseFloat(prompt("Please enter the first number:"));
    var num2 = parseFloat(prompt("Please enter the second number:"));
    var sum = num1 + num2;
    return sum;
}
var result = addTwoNumbers();
document.write("The sum of the two numbers is: " + result);


//question no 04
document.write("<h1>Question #4 <br></h1>")
function calculate(num1, num2, operator) {
    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operator!";
    }
    return result;
}
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /):");
var result = calculate(num1, num2, operator);
document.write("The result of " + num1 + " " + operator + " " + num2 + " is: " + result);


//question no 05
document.write("<h1>Question #5 <br></h1>")

function squareNumber(num) {
    return num * num;
}
var number = parseFloat(prompt("Enter a number to square:"));
var result = squareNumber(number);
document.write("The square of " + number + " is: " + result);

//question no 06
document.write("<h1>Question #6 <br></h1>")
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
var number = parseInt(prompt("Enter a number to calculate its factorial:"));
var result = factorial(number);
document.write("The factorial of " + number + " is: " + result);

//question no 07
document.write("<h1>Question #7 <br></h1>")
function displayCounting(start, end) {
    var counting = "";
    for (var i = start; i <= end; i++) {
        counting += i + " ";
    }
    document.write("Counting from " + start + " to " + end + ": " + counting);
}
var startNumber = parseInt(prompt("Enter the start number:"));
var endNumber = parseInt(prompt("Enter the end number:"));
displayCounting(startNumber, endNumber);


//question no 08
document.write("<h1>Question #8 <br></h1>")

function calculateHypotenuse() {
    function calculateSquare(x) {
        return x * x;
    }
    var base = parseFloat(prompt("Enter the length of the base:"));
    var perpendicular = parseFloat(prompt("Enter the length of the perpendicular:"));
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    document.write("The hypotenuse of the triangle is: " + hypotenuse);
}
calculateHypotenuse();


//question no 09
document.write("<h1>Question #9 <br></h1>")

function calculateArea(width, height) {
    return width * height;
}
var area1 = calculateArea(10, 5);
var rectangleWidth = 8;
var rectangleHeight = 12;
var area2 = calculateArea(rectangleWidth, rectangleHeight);
document.write("The area of the rectangle with width 10 and height 5 is: " + area1 + "<br>");
document.write("The area of the rectangle with width " + rectangleWidth + " and height " + rectangleHeight + " is: " + area2);


//question no 10
document.write("<h1>Question #10 <br></h1>")
function isPalindrome(str) {
var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
var reversedStr = cleanedStr.split('').reverse().join('');
return cleanedStr === reversedStr;
}
var result1 = isPalindrome('madam');
var result2 = isPalindrome('hello');

document.write("Is 'madam' a palindrome? ${result1}"); 
document.write("Is 'hello' a palindrome? ${result2}"); 


// question no 11
document.write("<h1>Question #11 <br></h1>")

function capitalizeWords(str) {
    return str
        .split(' ')                   
        .map(word =>                  
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');                 
}
const exampleString = 'the quick brown fox';
const capitalizedString = capitalizeWords(exampleString);
document.write(capitalizedString);


//question no 12
document.write("<h1>Question #12 <br></h1>")

function findLongestWord(str) {
    const words = str.split(' '); 
    let longestWord = '';         

    words.forEach(word => {
        if (word.length > longestWord.length) { 
            longestWord = word;  
        }
    });

    return longestWord; 
}
const example1String = 'Web Development Tutorial';
const longestWord = findLongestWord(example1String);
document.write(longestWord); 


//question no 13
document.write("<h1>Question #13 <br></h1>")

function countOccurrences(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}
var result = countOccurrences('JSResourceS.com', 'o');
document.write("The letter 'o' occurs " + result + " time(s) in the string.");



//question no 14
document.write("<h1>Question #14 <br></h1>")

function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}
function calcArea(radius) {
    const area = Math.PI * radius * radius;
    console.log(`The area is ${area.toFixed(2)}`);
}
calcCircumference(5);
calcArea(5);