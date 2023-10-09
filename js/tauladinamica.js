function pedirinput(){
//creació variables
let files = prompt("Introduce el numero de filas:");
let columnes = prompt("Introduce el numero de columnas:");
//creacion tabla
let t = document.createElement("table");
//borde de color tabla
t.border=1;

//bucle creació taula
for(let i = 0; i < files; i++){
    let tr = document.createElement('tr');
    for(let j = 0; j < columnes; j++){
        let td = document.createElement('td');
        td.textContent = ` ${i+1}, ${j+1}`;
        tr.appendChild(td);
    }
    t.appendChild(tr);
}
//mostrar taula al document

document.body.appendChild(t);
}
