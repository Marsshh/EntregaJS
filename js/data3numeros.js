function pedinput(){
    let hora = parseInt(prompt("Introduce la hora:"));
    let minut = parseInt(prompt("Introduce los minutos:"));
    let segons = parseInt(prompt("Introduce los segundos:"));

   
    
    const fecha = new Date();
    fecha.setHours(hora);
    fecha.setMinutes(minut);
    fecha.setSeconds(segons+1);
    
    console.log(fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());
}

// Llamar a la función para obtener los valores e imprimir el resultado
pedinput();
