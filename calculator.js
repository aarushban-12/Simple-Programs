const heading = document.getElementById("head");

function calculate(a,b, operation) {
    if (operation === "+"){
        head.textContent = "Your result is: " + (a+b);
    } else if (operation === "-"){
        head.textContent = "Your result is: " + (a-b);
    } else if (operation === "*"){
        head.textContent = "Your result is: " + (a*b);
    } else if (operation === "/"){
        head.textContent = "Your result is: " + (a/b);
    }
}

let form = document.getElementById("calc");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var num1 = document.getElementById("number1");
    var num2 = document.getElementById("number2");
    var operation = document.getElementById("operation");
    
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    operation = operation.value;
    calculate(num1, num2, operation);
});

