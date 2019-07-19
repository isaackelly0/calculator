var numbers = [];
var num = '';
const numButton = document.querySelectorAll('.number');
const opButton = document.querySelectorAll('.operation');
const equals = document.querySelector('#equals');
function operation(){

};
function display(){

};
numButton.forEach(function(elem){
  elem.addEventListener('click', function(){
    alert('it worked');//it doesnt tho
  })
})
opButton.forEach(function(elem){
  elem.addEventListener('click', function(){
    alert('this also works');
  })
})
