function calcularCostoLlamada(horas, minutos, segundos) {
  const tiempoTotalSegundos = horas * 3600 + minutos * 60 + segundos;
const costoLlamadaCentimos = 10 + (tiempoTotalSegundos / 60) * 5;
const euros = Math.floor(costoLlamadaCentimos / 100);
  const centimos = costoLlamadaCentimos % 100;

  return { euros, centimos };
}

const horas = parseInt(prompt("Introduce las horas:"));
const minutos = parseInt(prompt("Introduce los minutos:"));
const segundos = parseInt(prompt("Introduce los segundos:"));

if (!isNaN(horas) && !isNaN(minutos) && !isNaN(segundos)) {
  const costo = calcularCostoLlamada(horas, minutos, segundos);
  console.log(`El costo de la llamada es ${costo.euros} euros y ${costo.centimos} céntimos`);
} else {
  console.log("Por favor, introduce valores numéricos válidos.");
}