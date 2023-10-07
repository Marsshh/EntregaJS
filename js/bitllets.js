
// imput
var precioProducto = parseFloat(prompt("Ingresa el preu del producte:"));
var cantidadPagada = parseFloat(prompt("Ingresa la cantitat pagada:"));

// canvi
var cambio = cantidadPagada - precioProducto;


var billetes = [500, 200, 100, 50, 20, 10, 5];
var monedas = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];


var resultado = "Preu: " + precioProducto.toFixed(2) + " euros\n";
resultado += "Pagat: " + cantidadPagada.toFixed(2) + " euros\n";

//calcul del canvi bitllets bucle
resultado += "\nCanvi en bitllets i monedes:\n";
for (var i = 0; i < billetes.length; i++) {
    var cantidadBilletes = Math.floor(cambio / billetes[i]);
    //si tenim bitllets per entregar
    if (cantidadBilletes > 0) {
        //concatenar el resultat
        resultado += cantidadBilletes + " de " + billetes[i] + " euros\n";
        //restar la cantitat de bitllets entregada al canvi
        cambio -= cantidadBilletes * billetes[i];
    }
}


//calcul del canvi monedes bucle
for (var j = 0; j < monedas.length; j++) {
    var cantidadMonedas = Math.floor(cambio / monedas[j]);
    if (cantidadMonedas > 0) {
        resultado += cantidadMonedas + " de " + monedas[j] + " euros\n";
        cambio -= cantidadMonedas * monedas[j];
    }
}

// output
resultado += "\nTotal de canvi: " + cambio.toFixed(2) + " euros";
alert(resultado);
