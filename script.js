let num1;
let num2;
let total = 0;
let operation;
let display = document.querySelector(".display p");
let add = document.querySelector("#add");
let equal = document.querySelector("#equal");

    
add.addEventListener("click", calculate);
equal.addEventListener("click", () => {
    display.innerHTML = total;
});


//set the current number
function setNumber(num)
{
    if (total == 0)
    {
        num1 = num;
    }

    else
    {
        num2 = num;
    }
}

//get desired operation
function getOperation(op)
{
    operation = op;
}

function calculate()
{
    console.log("Entered calculate");
    switch (operation)
    {
        case "addition":
            total += (num1 + num2);
            console.log(total);
            break;
        case 'subtract':
            total -= currentNumber;
            break;
        case 'multiply':
            total *= currentNumber;
            break;
        case 'divide':
            total /= currentNumber;
            break;
    }
}