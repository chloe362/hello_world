function calc() {
    const inputA = document.querySelector("#a");
    const inputB = document.querySelector("#b");
    const operator = document.querySelector("#operator");
    const result = document.querySelector("#result");

    const a = inputA.value * 1;
    const b = inputB.value * 1;
    const op = operator.value;

    if (op === "+") {
        result.innerText = a + b;
    }

    if (op === "-") {
        result.innerText = a - b;
    }

    if (op === "*") {
        result.innerText = a * b;
    }

    if (op === "/") {
        result.innerText = a / b;
    }
}

const btn = document.querySelector("button");
// btn.onclick = calc;
btn.addEventListener("click", calc);
