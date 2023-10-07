 //FUNCIONS
 function decimalToHexadecimal(decimalNumber) {
    var hexadecimal = "";
    while (decimalNumber > 0) {
        var num = decimalNumber % 16;
        hexadecimal = num.toString(16).toUpperCase() + hexadecimal;
        decimalNumber = Math.floor(decimalNumber / 16);
    }
    return hexadecimal;
}

function decimalToOctal(decimalNumber) {
    var octal = "";
    while (decimalNumber > 0) {
        var num = decimalNumber % 8;
        octal = num.toString() + octal;
        decimalNumber = Math.floor(decimalNumber / 8);
    }
    return octal;
}

function decimalToBinary(decimalNumber) {
    var binary = "";
    while (decimalNumber > 0) {
        var num = decimalNumber % 2;
        binary = num.toString() + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    return binary;
}



// input
var decimalNumber = parseInt(prompt("Ingrese un número en base 10:"));

//  verifica si es un numero
if (!isNaN(decimalNumber)) {
    var hexadecimalNumber = decimalToHexadecimal(decimalNumber);
    var octalNumber = decimalToOctal(decimalNumber);
    var binaryNumber = decimalToBinary(decimalNumber);

    // output
    alert("Numero en base 10: " + decimalNumber +
          "\nNumero en base 16 (hexadecimal): " + hexadecimalNumber +
          "\nNumero en base 8 (octal): " + octalNumber +
          "\nNumero en base 2 (binari): " + binaryNumber);
} else {
    alert("Numero invàlid");
}