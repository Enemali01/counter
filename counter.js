const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const displayCount = document.getElementById('counter-preview');
const resetBtn = document.getElementById('reset');

// increaseBtn.addEventListener('click',() =>{
//   counter++;
//   displayCount.innerHTML = counter;
// });

// decreaseBtn.addEventListener('click', ()=>{
//   counter--;
//   displayCount.innerHTML = counter;
// });



increaseBtn.addEventListener('click', plus);
decreaseBtn.addEventListener('click', minus);

var counter = localStorage.getItem('counter') || 0;
displayCount.innerText = counter

function plus(){
  counter++;
  displayCount.innerHTML =  counter;
  localStorage.setItem('counter', counter);
}

function minus(){
  counter--;
  displayCount.innerHTML = counter;
   localStorage.setItem('counter', counter);
}

resetBtn.addEventListener('click', reset)
function reset(){
  counter = 0;
  displayCount.innerHTML = 0;
}



// save();

// function save(){
//   displayCount.innerText = counter;
//   localStorage.setItem('counter', counter);
// }