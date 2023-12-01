let display = document.getElementById("display");
let values = "";

// add values
function calc(e) {
    values += e.value;
    displays();
}
// display values
function displays(){
    display.value = values;
}
// AC buttons
function del() {
    values = "";
    displays();
}
// DE button
function minus() {
    values = values.slice(0,-1);
    displays();
}
// calcualtion answer
function answer() {
    values = eval(values);
    displays();
}