let currentNumber = 0;
let total = 0;
let display = document.querySelector(".display p");

document.addEventListener("DOMContentLoaded", function() {
    console.log("test");
})

function setNumber(num)
{
    currentNumber = num;
    display.innerHTML = currentNumber;
}