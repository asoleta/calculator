const screenDisplay = document.querySelector(".display");

//creates a node list which is treated like an array
const buttons = document.querySelectorAll("button");

//goes through each button in node list and adds an eventListener
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));

//array will store values of buttons pressed
let calculation = [];
let accumCalc;

//Functions
function calculate(button)
{
    //stores text content of button pressed
    const value = button.textContent;

    if (value == "CLEAR")
    {
        calculation = []; //clear the array
        screenDisplay.textContent = '.';
    }

    else if (value == "=")
    {
        screenDisplay.textContent = eval(accumCalc);
    }

    else if (value == "DELETE")
    {
        calculation.splice(-1);
        accumCalc = calculation.join('');
        screenDisplay.textContent = accumCalc;
    }

    else
    {
        //adds value to the array
        calculation.push(value);
        accumCalc = calculation.join('');
        screenDisplay.textContent = accumCalc;
    }

}