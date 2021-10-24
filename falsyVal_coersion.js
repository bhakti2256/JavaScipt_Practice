// Falsy values
// undefined, null, '', 0, Nan

var a;

console.log(a); // undefined

//coersion
let b = '1';

// Due to coersion, string 1 is asummed equal to int 1
if(1 == b){
    console.log("True");
} 

if(1 === b){
    console.log("True");
} else {
    console.log("False");
}

//To perform strict check, use ===