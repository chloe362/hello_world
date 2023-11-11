const screen = document.querySelector('#screen')
const numBtns = document.querySelectorAll("button.num");
const oprBtns = document.querySelectorAll("button.opr");
const calcBtn = document.querySelector("button.calculate")
let a = 0
let operation = null
let b = 0

for (let i = 0; i < numBtns.length; i++) {
    const numBtn = numBtns[i];

    function onBtnClick(){
        alert(numBtn.dataset.num)
    }
    numBtn.addEventListener("click", function () {
        if (operation !== null){
        b = b + parseInt(numBtn.dataset.num,10 );
        screen.innerHTML = +b;
    }
    a = a + parseInt(numBtn.dataset.num,10 );
    screen.innerHTML = +a;
    })
 }  

 for(let i = 0; i < oprBtns.length; i++){
    const oprBtn = oprBtns[i]
    oprBtn.addEventListener("click", function(){
        operation = oprBtn.dataset.opr
 })
 }
 calcBtn.addEventListener("click", function(){
    
 })