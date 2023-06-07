// array methods
// Push
// pop 
// shift 
// unshift
// spread
// reverse 
// find 
// filter 
// map 



// push- adds item(s) to the end of an array
let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];
array.push('g' , 1 , 'z');
console.log(array)

// pop- removes an item(s) from the end of an array
array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];
array.pop();
array.pop();
console.log(array)

// shift removes an item(s) from the start of an array 
array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];
array.shift();
console.log(array);

// unshift adds items to the start of an array
array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];
array.unshift();
console.log(array);

// spread- the spread operator is a way of combining arrays or objects
array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];
let newArray = [...array, 'g' , 'h' , 'i']
console.log(newArray);
//reverse- reverses the array
console.log(array.reverse());
//find
let studentsArray = [
    {id:12 , name: 'Jacob' , gender: 'f'},
    {id:13 , name: 'Robb' , gendeer :"m"},
    {id : 34, name:'gertrude' , gender :'m'},
    {id: 38,  name:'nonye', gender:'f'}
]
let student = studentsArray.find(x=> x.id === 34)
console.log(student);
//filter
let femaleStudents = studentsArray.filter(x=> x.gender === 'f')
console.log(femaleStudents)


//map function ==> assignment

//Functions
//es-5 syntax
function doSomething(parameter){
//write the code you want the function to run
};

//or

const doSomethingElse = (parameter1, parameter2) => {
//write the code you want the function to run
};

function addNumbers(x,y,z){
    console.log(x + y + z);
}

addNumbers(3, 5, 8);
addNumbers(2, 15 , 10)

function pythagoras(opp , adj){
    // 1st Method
    console.log( (opp**2 + adj**2)**0.5);
    //2nd method
    // console.log(Math.sqrt(opp**2 + adj**2));
}
pythagoras(3, 4);
pythagoras(6 , 8);
pythagoras(7, 24);
pythagoras(5, 12);