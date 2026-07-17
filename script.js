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

    if (theme === "pink") {
        document.body.style.background = "linear-gradient(135deg,#ffd6e8,#ffeef6)";
    }

    if (theme === "purple") {
        document.body.style.background = "linear-gradient(135deg,#e9d5ff,#f5ebff)";
    }

    if (theme === "blue") {
        document.body.style.background = "linear-gradient(135deg,#dbeafe,#eff6ff)";
    }

    if (theme === "mint") {
        document.body.style.background = "linear-gradient(135deg,#d1fae5,#ecfdf5)";
    }

    if (theme === "dark") {
        document.body.style.background = "#1e1e2f";
    }
}
