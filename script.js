// alert("connected");
// console.log("connected")

// DATA AND VARIABLE TYPES
// Data types includes;
// String, number, boolean, object, array, null e.t.c.
// variable types include
// Const, let, var


// Declaration and assignment of variables
const name= 'Desmond'; 
const surname= 'Ilika'; 
const state= 'imo'
let age = 15;
var job='Tutor';
let married = false;
var height='1.5m;'
let nickname= '007';
// as long as its enclosed within a quote its a string 

// reassigning the variable const cannot be reassigned a new value var and let can
age= 16; 



console.log(name);
console.log(age);



// ===string concatenation===
console.log(name + ''+ surname)
// Desmond Nwosu hails from Imo state and He is a 15 years
console.log( name + ' ' + surname + " hails from " + state + " state and he is a " + age + ' years old ' + job);


// Template string 
console.log(`${name} ${surname} hails from ${state} and age is ${age}`)



// Arithmetic Operations
console.log (12 + 2); //add
console.log(12 - 2); //substract
console.log(12 / 2); //divide
console.log(12 * 2); //multiply
console.log(12 ** 2); //power
console.log(12 % 7); //remainder


// Equality or comparison operators

// Equality or comparison operators includes
// === //equal
// === //equivalent
// != //not Equal
// !== //not equivalent
// equal and equivalent are two different words
// equivalent means theres no room for changes. it shows that two objects are the same thing


//logical operators
/* 
&&    and 
||    or
*/


console.log(3 + 5 == 8); //true
console.log( 3 + 5 === 8); //true
console.log( 8 == '8'); //true
console.log(8 === "8"); //false
console.log("3" + "5" == 8) //false
console.log( "3" + "5" === "8") //false
console.log( "3" + 5 == 8) //false
console.log( "3" + 5 === 35) //false


//inequality and inequivalence
console.log(9 + 5 != 14); //false
console.log(9 + 5 !== 14); //false
console.log(9 + 5 !=10) //true
console.log(9 + 5 !==10) //true
console.log(9 != '9') //false
console.log(9 !== '9') //false
console. log(9 + 5 != '14') //false
console.log(9 + 5 !== '14') //true
console.log("9" + "5" !="14") //true
console.log('9' + '5' !== '14')//true
console.log('9' + '5' != '95')//false
console.log('9' + '5' !== '95')//false
console.log('9' + '5' !== 95)//true



console.log('===conditional statements===')
//conditional statements


//if statement
//if else statement
//if else if statement
//tenary operator
//conditional and statement
//switch statement

if(2 + 4 === 6){
console.log('correct')
}else{
    console.log('incorrect')
}

//if else if statement
if(2 + 4 === 6){
    console.log('1st is correct');
}else if(3 * 8 ===24){
    console.log('2nd is correct');
}else if(45 - 30 === 15){
    console.log('3rd is correct');
}else if(16 / 2 === 8){
    console.log('4th is correct');
}else{
    console.log('none is correct');
}

//tenary operator for if else statement- condition, what it should do and another action
2 + 4 === 6 ? console.log('correct') : console.log('incorrect')

//tenary operator for if else if statement
2 + 4 === 6 ? console.log ('1st is correct') :
3 * 8 === 24 ? console.log('2nd is correct') :
45 - 30 === 15 ? console.log('3rd is correct') :
16 / 2 === 8 ? console.log('4th is correct') :
console.log('none is correct');


//conditional statement- only if statement
2 + 4 === 6 && console.log ('correct');

//take home : switch statement
 // expression
 // case

//  conditional logical operations
if (2 + 2 === 4 || 3 * 8 ===24){
    console.log(true);
}else{
    console.log(false);
};
if(2 + 2 === 14 && 3 * 8 === 24){
    console.log(true);
}else{
    console.log(false);
}

