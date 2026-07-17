const display=document.getElementById("display");
function appendValue(value){
  display.value += value;
}
function clearDisplay(){
display.value = "";
}
function deleteLast() {
  display.value =display.value.slice(0, -1);
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
  function changeTheme() {

    const theme = document.getElementById("theme").value;
    const calculator = document.querySelector(".calculator");

    if(theme === "pink"){
        document.body.style.background = "linear-gradient(135deg,#ffd6e8,#ffeef6)";
        calculator.style.background = "#ffffff";
        document.getElementById("display").style.color = "#ff4d94";
    }

    else if(theme === "purple"){
        document.body.style.background = "linear-gradient(135deg,#e9d5ff,#f3e8ff)";
        calculator.style.background = "#ffffff";
        document.getElementById("display").style.color = "#9333ea";
    }

    else if(theme === "blue"){
        document.body.style.background = "linear-gradient(135deg,#dbeafe,#eff6ff)";
        calculator.style.background = "#ffffff";
        document.getElementById("display").style.color = "#2563eb";
    }

    else if(theme === "mint"){
        document.body.style.background = "linear-gradient(135deg,#d1fae5,#ecfdf5)";
        calculator.style.background = "#ffffff";
        document.getElementById("display").style.color = "#059669";
    }

    else if(theme === "dark"){
        document.body.style.background = "#1f2937";
        calculator.style.background = "#374151";
        document.getElementById("display").style.color = "#ffffff";
    }

    }
