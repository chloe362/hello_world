const screen = document.querySelector('#screen')
const numBtns = document.querySelectorAll("button.num");

let a = 0;
for (let i = 0; i < numBtns.length; i++) {
    const numBtn = numBtns[i];

    function onBtnClick(){
        alert(numBtn.dataset.num)
    }
    numBtn.addEventListener("click", function () {
        a = a + parseInt(numBtn.dataset.num,10 );
        screen.innerHTML = a;
    })
 }  