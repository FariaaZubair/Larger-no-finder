function checkLargerNumber() {
    let num1 = parseFloat(document.getElementById("firstNumber").value);
    let num2 = parseFloat(document.getElementById("secondNumber").value);
    let result = document.getElementById("result");
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            result.textContent = `The larger number is ${num1}.`;
        } else if (num2 > num1) {
            result.textContent = `The larger number is ${num2}.`;
        } else {
            result.textContent = `Both numbers are equal.`;
        }
    } else {
        result.textContent = "Please enter valid numbers.";
    }
}