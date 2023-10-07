let num = prompt("Ingresa un numero");

let a1=1;
let a2=1;

for (let i = 2; a2 < num; i++) {
    let result = a1 + a2;
    a1 = a2;
    a2 = result;
    console.log(result);
  }
  