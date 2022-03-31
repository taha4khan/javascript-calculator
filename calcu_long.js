function calculator(number1, number2, operator) {
    
    if (operator == "+") {
        sum(number1, number2)
    } else if(operator == "-") {
        sub(number1 ,number2)
    } else if(operator == "*") {
        multiply(number1, number2)
    } else if(operator == "**") {
        power(number1, number2)
    } else if(operator == "/") {
        divide(number1, number2)
    } else if(operator == "%") {
        percentage(number1, number2)
    } else {
        console.log("invalid operation")
    }
} 

function sum(number1, number2) {
    console.log("sum is " + (number1 + number2));
}
function sub(number1, number2) {
    console.log("subtract is " + (number1 - number2));
}
function multiply(number1, number2) {
    console.log("cross prodect is " + (number1 * number2));
}
function power(number1, number2) {
    console.log("square is " + (Math. pow(number1 ** number2)));
}
function divide(number1, number2) {
    console.log("division is " + (number1 / number2));
}
function percentage(number1, number2) {
    console.log("percent is " + (number1 % number2));
}
calculator(2,3, '+');
calculator(4,6, "-");
calculator(40,2,"*");
calculator(2,2,"**");
calculator(2,7,"/");
calculator(2,4,"%");
calculator(9,1,"$");
