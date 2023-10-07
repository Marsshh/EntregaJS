function pedirinput(){
let dies=prompt("inserta un numero");



    const anys = Math.floor(dies / 365);
    dies %= 365;
    
    const mesos = Math.floor(dies / 30);
    dies %= 30;

   

console.log(`Años: ${anys}, Meses: ${mesos}, Días: ${dies}`);



}