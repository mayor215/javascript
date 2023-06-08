//DOM - (document object model) Manipulation:
//the interaction or manipulation of a browser or web page using JS
document.write('This is the first dom script');
document.write("<h1> Let's begin");
//CSS using JS
document.body.style.backgroundColor = 'red';
document.body.style.color = "white";
document.body.style.fontSize = '3rem';
document.body.style.fontFamily = 'cursive';

//selecting elements using javascript
let button1 = document.querySelector('.click')
let button2 =  document.querySelector('.unclick')
let title =  document.querySelector('h1')
button1.style.backgroundColor = 'green';
button1.style.color = 'white'
button1.style.fontSize ='3rem';
button1.style.padding ='1rem'

button2.style.backgroundColor = 'blue';
button2.style.color = 'white'
button2.style.fontSize ='3rem';
button2.style.padding = '1rem';

//Event listeners - method used to create interactivity/user actions to the web browser
// event listeners include
//click
// Mouseout
// mouseover
//scroll
//change
// submit
button1.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
    document.body.append('button 1 clicked');
})
//write wipes everything except what its supposed to be there. so the better option is append or prepend
button2.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
        document.body.style.fontFamily = 'helvetica';
        document.write('button 2 clicked')
    })
    
    
    //working with inputs
    const input = document.querySelector('input')
    const taskbtn = document.querySelector('.taskbtn')
    taskbtn.addEventListener('click' , function(){
       document.body.prepend (' ' +input.value);
    })

    
