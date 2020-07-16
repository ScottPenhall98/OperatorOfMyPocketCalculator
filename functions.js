var buttons = ["0","1","2","3","4","5","6","7","8","9"];
var operators = ["+", "-", "/", 'x','=','AC']; 
var currentValue = "0"
var value1
var screen = document.createElement("h2");
var newCalculation = true
var lastOperator

function onStart(){
    screen.innerHTML = currentValue;
    screen.setAttribute("id", "screen")
    document.body.appendChild(screen);
    // var counter = 0
    // div = document.createElement("div")
    // div.setAttribute("id", "div1")
    // document.body.appendChild(div)
    // var divCounter = 1
    for(var i = 0; i < buttons.length; i++){
        // if(counter === 3){
        //     counter = 0
        //     divCounter ++
        //     div = document.createElement("div")
        //     var attributes ={
        //         id: [("div"+divCounter)],
        //         // style: ["clear: right"]
        //     }
        //     setElementAttribute(button, attributes)
        //     document.body.appendChild(div)
        // };
        button = document.createElement("button");
        var attributes= {
            class: ["numberbutton", "button"],
            onclick:["buttonPress(event)"],
            id: buttons[i]  
        }
        button = setElementAttribute(button, attributes)
        button.innerHTML = buttons[i];
        
        //trade omments when you want to try align the buttons properly
        document.body.appendChild(button)
        // var currentDiv = document.getElementById("div"+divCounter)
        // currentDiv.appendChild(button);
        // counter ++
    }
    for (var i = 0; i < operators.length; i++) {
        button = document.createElement("button");
        var attributes = {
            class: ["operatorbutton", "button"],
            onclick: ["operatorPress(event)"],
            id: [operators[i]]
        }
        button = setElementAttribute(button, attributes)
        button.innerHTML = operators[i];
        document.body.appendChild(button);
    }
}

function buttonPress(event){
    if(currentValue === "0"){
        currentValue = event.target.id
    }else{
        currentValue = currentValue + event.target.id
    }
    screen.innerHTML = currentValue;
}

function operatorPress(event){
    //switch statement
    var value = Number(currentValue);
    
    if (event.target.id === "="){
        if (!newCalculation) {
            screen.innerHTML = calculate(value)
        }
        newCalculation = true;
        value1 = undefined
        currentValue = "0"
    } else if (event.target.id === "AC"){
        newCalculation = true;
        value1 = undefined
        currentValue = "0"
        screen.innerHTML = currentValue
    }else{
        lastOperator = event.target.id
        if (!newCalculation) {
            value = calculate(value)
        }
        newCalculation = false
        value1 = value
        currentValue = "0"
        screen.innerHTML = currentValue
    }   
    
}
function calculate(value){
    var result
    switch (lastOperator) {
        case "+":
            result = value1 + value
            break
        case "-":
            result = value1 - value
            break
        case "*":
            result = value1 * value
            break
        case "/":
            result = value1 / value
            break

    }
    return result
}

function setElementAttribute(element, attributes){
    for (key in attributes) {
        
        for (var i = 0; i < attributes[key].length; i ++){
            element.setAttribute(key, attributes[key][i])
        }
    };
    return element
}