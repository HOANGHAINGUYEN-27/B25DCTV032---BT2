const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const value = this.innerText; 
        if (value === "C") {
            display.innerText = "0";
        } 
        else if (value === "=") {
            try {
                display.innerText = eval(display.innerText);
            } catch (error) {
                display.innerText = "Error"; 
            }
        } 
        else {
            if (display.innerText === "0" || display.innerText === "Error") {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});