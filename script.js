





// num-1
function calculateAverage(numbers) {

  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "Input is not a valid array of numbers.";
  }
  var sum = numbers.reduce((total, num) => total + num, 0);
  var average = sum / numbers.length;
  return average;
}
var numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
var result = calculateAverage(numbers);
console.log(`The average of the numbers is: ${result}`);


// num-2
var base = 5;
var height = 2;
function area() {
  return (base * height) / 2;
}
console.log((base * height) / 2);


// num3
var age = 38;
function agedays() {
  return (age * 365.25);
}
console.log((age * 365.25));


// num4
var num1 = 1536;
var num2 = 32567;
function sum() {
  return (num1 + num2);
}
console.log((num1 + num2));


// num5
var names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];
function alice() {
  return (names[0]);
}
console.log(names[0]);

// num6
var MyName = "ossama othman sayed seddik";
function ShowMyMyname() {
  return ("my name is " + MyName);
}
// document.write("<h1>"+ShowMyMyname()+"</h1>");
document.getElementById("myname").innerHTML = ShowMyMyname();

// num 7

var hours = 12;
var seconds = hoursToSeconds(hours);
function hoursToSeconds(hours) {
  var seconds = hours * 60 * 60;
  return seconds;
}
console.log(hours + " hours is equal to " + seconds + " seconds.");

// num8

var numb1 = 45;
var numb2 = 63;
var numb3 = 82;
var numb4 = 69;
function isSumGreaterThan350(num1, num2, num3, num4) {
  var sum = num1 + num2 + num3 + num4;
  if (sum > 350) {
    return true;
  } else {
    return false;
  }
}
console.log((sum > 350));

// num9

var maybe = 0;
function equalZero() {
  if (maybe == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(equalZero());

// num10
var number1 = 689;
var number2= 44;
 function calculateRemainder(number1,number2){
  return number1%number2;
 }
  
console.log(calculateRemainder(number1,number2));


// num11


var number1 = 10;
var number2 = 10;
function FindTheLargestNumber(number1, number2) {
  if (number1 > number2) {
    console.log(num1 + " is the greater number.");
  } else if (number1 < number2) {
    (num2 + " is the greater number.");
  } else {
    console.log("Both numbers are equal.");
  }
}
FindTheLargestNumber(number1, number2);

// num12
function isNumber(Input) {
  return typeof Input === "number";
}
var numm1 = 86;
var numm2 = "Me";
console.log(isNumber(numm1));
console.log(isNumber(numm2));



// num13
function getCurrentDate() {
  var currentDate = new Date();
  return currentDate;
}
var currentDate = getCurrentDate();
console.log("Current date: " + currentDate);


