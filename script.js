var numbers = [];
var num = '';
const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operation');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
var displayBar = document.querySelector('.display');
function operation(){
  //get rid of divide by zeros
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === '/' && numbers[i+1] === '0'){
      numbers[i] = '+';
      alert("Try not to divide by zeros");
    }
  }
  let answer = numbers.join('');// merge array into a single string
  // no trail ends
  if(answer[answer.length - 1] === '+' || answer[answer.length - 1] === '-'){
    answer += '0';
  }
  else if(answer[answer.length - 1] === '*' || answer[answer.length - 1] === '/'){
    answer += '1';
  }
  //empty array and num values
  //make first index of array the evaluated answer
  numbers = [];
  numbers.push(eval(answer));
  num = ''
};
// display the string of numbers and operands
function display(){
  if(num.length > 0){
    displayBar.value = numbers.join('') + num;
  }
  else{
    displayBar.value = numbers.join('');
  }
};
//add numbers to the list of operations
numButton.forEach(function(elem){
  elem.addEventListener('click', function(){
    num += elem.innerHTML; //add numbers to string
    display();
  })
})
//add next operation and ready next number for the list
opButton.forEach(function(elem){
  elem.addEventListener('click', function(){
    //make sure no two operands are piled onto each other
    if((numbers[numbers.length - 1] != '+' &&
      numbers[numbers.length - 1] != '-' &&
      numbers[numbers.length - 1] != '/' &&
      numbers[numbers.length - 1] != '*') ||
      numbers[0] != ''){
        numbers.push(num);
        numbers.push(elem.innerHTML);
        num = '';
      }
    else{
      alert('Invalid input, operations cannot follow other operations or blank spaces');
    }
    display();
  })
})
//call operation function to evaluate list of numbers
equals.addEventListener('click', function(){
  numbers.push(num);
  num = '';
  operation(numbers);
  display();
})
//reset all values
clear.addEventListener('click', function(){
  numbers = [];
  num = '';
  displayBar.value = 0;
})
