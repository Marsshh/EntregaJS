function pedirinput(){
    let n1 = parseInt(prompt("Introduce el primer valor:"));
    let n2 = parseInt(prompt("Introduce el segundo valor:"));
    let n3 = parseInt(prompt("Introduce el tercer valor"))
    let absN1 = Math.abs(n1 - 100);
    let absN2 = Math.abs(n2 - 100);

    if (absN1 < absN2) {
        console.log(n1);
    } else {
        console.log(n2);
    }
}

// Llamar a la función para obtener los valores e imprimir el resultado
pedirinput();


