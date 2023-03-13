/** Printing Hello World in Javascript console */
console.log("hello world");
console.log(1+1);
console.log('hello from single quote');




/* ================== Data Types ========================
 There are eight basic data types in javascript.
  1. String
  2. Number
  3. Boolean
  4. Object
  5. Null
  6. Undefined
  7. Symbol
  8. BigInt
*/

/* ============ String ======================
Anything inside the quotation marks is a string.
There are three diffrent types of quotation marks:
1. Double Quotation ("")
2. Single Quotation ('')
3. Backtick Quotation (``);*/
console.log(`hello from backtick ${1+1}`);

/*There is no diffrence between 1 and 2. But with backtick quotation we can write javascript quote inside using ${} symbol.
*/


/* ================== Numbers ======================
  There is no separate integer or floating point number in javascript.      Every mathematical number is of Number data type in js.
*/
console.log(-1);
console.log(2.2);
/* ============== Boolean =========================
  Takes one of the two values: true or false
*/
console.log(true);
console.log(false);
/* ============== How to check data type ===========
 typeof operator is used to check the data type of a data
 */
console.log(typeof'sona angdembe');
console.log(typeof(1));
console.log(typeof false)
/*------------------variables-----------------*/
let name= 'sona angdembe';
let over = 10;
let win= true;
console.log(name);
console.log(name);
console.log(name);
console.log(over);

win= false;
console.log(false)
/*---------------constant------------------*/
const birth_year='2003';
const pi = 3.14
/* =============== If Statement =====================
*/
let isRaining =false;
let isGoingToRain=true;
if (isRaining) {
  console.log('take an umbrella');
}
else if (isGoingToRain){
  console.log("go with an umbrella");
}
else{
   console.log ('go without umbrella');
}
/*if (isnotRaining == false){
 onsole.log ('go without umbrella');
}*/
/* ================ Comparision Operators ====================
  1. is greater than (>)
  2. is less than (<)
  3. is equal to (==)
  4. is strictly equal to (===)
  5. is greater than or equal to (>=)
  6. is less than or equal to (<=)

*/
const num= 0;
if (num>0){
  console.log('positive');
}
else if (num < 0){
  console.log('negative');
}
else if(num === 0){
  console.log(' zero');
}
/* Create a grade calculator that prints "Distinction" if grade is greater than or equal to 80, "First Division" if grade is greater than or equal to 60 and less than 80, "Second Division" if grade is greater than 50 and less than 60, otherwise "Fail" 
*/
const score = 50;
if(score >= 80){
  console.log('distinction');
}
else if(score >=60 && score <80){
  console.log('frist division');
}
else if(score > 50  && score < 60)
{
  console.log('second division');
}
else{
  console.log('fail');
}

/* ================= Logical Operators ====================== 
1. AND Operator (&&) returns true if all conditions are true
2. OR Operaor (||) returns true if one of the conditions is true
3. NOT Operator (!) returns opposite of the given value
*/
let haveToGoOutside = true;
if(isRaining && haveToGoOutside){
  console.log ('take umbrella');
}
if (isRaining || isGoingToRain)
{
  console.log("take umbrella");
}
console.log(!false);
/*isRaining = !isRaining*/
/* ============== For Loops ==============================
Used when same task is being done multiple times.  Like printing a name 100 times.
for (starting_statement; stopping_condition; action) {
  // some task
}
*/
/*let start_pts= 10;*/

for(let start_pts=10; start_pts >= 0; start_pts=start_pts-1){
  console.log(start_pts);
}

/* ========================= While Loops ====================== 
  Same use cases as for loops.
  // starting condition
  while(stopping_condition) {
    // some task
    // action
  }
*/
let start = 0;
while(start <10){
  console.log(start);
  start = start+1;
}
/* ====================== Functions ============================
  Functions are like machines that takes some input, process them and produce some output.
  
  function name_of_function(input) {
    return output;
  }

*/
function printer(name){
  return `your name is ${name}`;
}
let output= printer('sosocus');
console.log(output);


function add (num1,num2) {
  return num1+num2;
}
let result = add(2,4);
console.log(result);

/*const subtract = (num1,num2) => num1-num2;
subtract(10,9);
let result = add(10,9);
console.log(result);*/
/* ==================== Object =====================================
Object are like collection of diffrent data. Like in real world, everything is an object and every object has some properties. Like car is a object and has properties like color, brandName, Model etc.
Similarly, Object is Javascript is just like real world objects that has some properties and values.
*/
const student = {
  name: 'sosocus limbu',
  roll:38,
  greet: function(){
    return 'good morining';
  }
}
console.log(student.name,student.roll);
console.log(student.greet());


/* ============================= Array ============================
Arrays are also the collection of diffrent data, but unlike objects they don't need properties to store data.
let favorite_animes = ["Death Note", "Steins Gate", "Classroom of Elite"];
*/
const fruits = ['apple','banana','oranges','9867'];

const top_10_movies = [
  {
    id: 1,
    name: 'aftersun',
      genre: 'drama'
  },
{
  id: 2,
    name:'before sunrise',
    genre: 'romance'
}
]
console.log(top_10_movies[1].name);

/**  Problem 1
Write a function named "fullName" that takes input "firstName" and "lastName" and returns the fullName;
*/

/** Problem 2 
Write a function named "reverseMachine" that takes some string as input and return the reverse of that string.
Like: input = "dog" output = "god"

*/