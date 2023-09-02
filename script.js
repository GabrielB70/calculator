const display = documentqueryselector("display");
const buttons = documentqueryselectorall("button");
const specialchars =["%","*","/","-","+","="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") { 

       output = (output.replace("%", "/100") )
    } else if(btnValue === "AC") {
        output = ""
    } else if() {

    }  
}
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});