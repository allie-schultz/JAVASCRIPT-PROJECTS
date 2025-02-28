//creates object to keep track of values
const Calculator = {
    //displays 0 on calculator
    Display_Value: '0',
    //holds first operand for any expressions
    First_Operand: null,
    //checks if second operand has been inputted by user
    Wait_Second_Operand: false,
    //holds operator
    operator: null
};
//modifies values when button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //checks if Wait_Second_Operand is true and sets Display_Value
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites Display_Value if current value is 0
        //otherwise adds to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//handles decimal points
function Input_Decimal(dot) {
    //ensure that accidental clicking of decimal doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //if Display_Value doesn't have a decimal point, it adds one
        Calculator.Display_Value += dot;
    }
}

//handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //when operator key is clicked, convert current num to a num and store
    //in Calculator.First_Operand if it doesn't exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if operator exists and if Wait_Second_Operand is ture
    //then updates operator and exits function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup preformed for operator
        //in Perform_Calculation object and function that matches operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //add fixed amount of numbers after decimal
        result = Number(result).toFixed (9);
        //removes trailing 0's
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//updates screen with contents of Display_Value
function Update_Display() {
    //uses calculator-screen class to target input tag
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target variable is an object that represents clicked element
    const { target } = event;
    //if clicked element is not a button, exit function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    //ensures AC clears calculator screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})