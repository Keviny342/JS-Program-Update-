let i = 0; //Original number
let c = 0; //Amount changed

//Creates the number value and the change value
document.getElementById("num").innerHTML = i;
document.getElementById("change").innerHTML = c;

//Operations
function add(){
    i = i + c;
    document.getElementById("num").innerHTML = i;
}
function subtract(){
    if(i-c>0)
    {
        i = i - c;
        document.getElementById("num").innerHTML = i;
    }else{
        document.getElementById("num").innerHTML = i;
    }
}

//Change value
function update1(){
    c = 1;
    document.getElementById("change").innerHTML = c;
}
function update5(){
    c = 5;
    document.getElementById("change").innerHTML = c;
}
function update10(){
    c = 10;
    document.getElementById("change").innerHTML = c;
}
function update25(){
    c = 25;
    document.getElementById("change").innerHTML = c;
}