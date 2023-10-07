
const base = prompt("base:");
const exponent =prompt("exponent:");
//començar contador
console.time("Math.pow()");
//execució math.pow

const resultado1 = Math.pow(base, exponent);

console.timeEnd("Math.pow()");


function calcularPotencia(base, exponent) {
  let resultado = 1;

  for (let i = 0; i < exponent; i++) {
    resultado *= base;
  }
  return resultado;
}

console.time("Bucle");
const resultado2 = calcularPotencia(base, exponent);
console.timeEnd("Bucle");

console.log(` ${base} elevat a la ${exponent} es ${resultado2}`);
