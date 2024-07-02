const display = document.getElementById("calculator__input");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERR";
    }
}