var numbers = [];
var num = '';
const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operation');
const equals = document.querySelector('#equals');
function operation(arr){
  console.log(arr);
};
function display(){

};
//add numbers to the list of operations
numButton.forEach(function(elem){
  elem.addEventListener('click', function(){
    num += elem.innerHTML; //add numbers to string
  })
})
//add next operation and ready next number for the list
opButton.forEach(function(elem){
  elem.addEventListener('click', function(){
    numbers.push(num);
    numbers.push(elem.innerHTML);
    num = '';
  })
})
//call operation function to evaluate list of numbers
equals.addEventListener('click', function(){
  numbers.push(num);
  operation(numbers);
})
