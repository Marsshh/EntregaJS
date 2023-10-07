//variables
 var red = parseInt(prompt("El valor del vermell (0-255):"));
 var green = parseInt(prompt("El valor del verd (0-255):"));
 var blue = parseInt(prompt("El valor del blau (0-255):"));


 if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
     //la funció toString16 converteix a hexadecimal i la funcio pedStart
     //assegura que la var té 2 valors, en cas de que nomes en tingui 1 afegeix un 0 al final
     var hexRed = red.toString(16).toUpperCase().padStart(2, '0');
     var hexGreen = green.toString(16).toUpperCase().padStart(2, '0');
     var hexBlue = blue.toString(16).toUpperCase().padStart(2, '0');

     // Mostrar el resultat
     var hexadecimalColor = "#" + hexRed + hexGreen + hexBlue;
     alert("El color en format hexadecimal es: " + hexadecimalColor);
 } else {
     alert("valors incorrectes");
 }