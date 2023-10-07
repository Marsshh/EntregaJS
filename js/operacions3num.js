let num1=prompt("inserta un numero");
let num2=prompt("inserta un numero");
let num3=prompt("inserta un numero");


const miarray=[num1, num2, num3];

miarray.sort();


let major=miarray[2];
console.log(`major: ${major}`);


let mitjana=miarray[1];
console.log(`mediana: ${mitjana}`);

let menor=miarray[0];
console.log(`menor: ${menor}`);


let mitja=(miarray[0]+miarray[1]+miarray[2])/3;
console.log(`mitja: ${mitja}`);