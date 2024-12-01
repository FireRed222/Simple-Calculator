let res = document.querySelector(".result");
let val1 = document.querySelector(".val1");
let val2 = document.querySelector(".val2");

let add = ( ) => (res.innerHTML = +val1.value + +val2.value);
let minus = ( ) => (res.innerHTML = +val1.value - +val2.value);
let multiply = ( ) => (res.innerHTML = +val1.value * +val2.value);
let divide = ( ) => (res.innerHTML = +val1.value / +val2.value);
let reset = ( ) => {
    res.innerHTML = '00';
    val1.value = "";
    val2.value = "";
}
 
