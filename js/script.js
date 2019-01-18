'use strict';
//Array con todos los objetos cliente
var clientesCartera = [];
var cliente;




(function(){
    refresh();
})();



function refresh(){
    //Numero de clientes
    document.getElementById("num-clientes").innerText = clientesCartera.length;
}

function nuevoCliente(){
    let a = new Cliente("regular","sin nombre","correo@web.com", 666666666,"sin ciudad",99,"sin sexo","Hoy","sin comentarios");
    clientesCartera.push(a);
    refresh();
    cliente = a;
    cambiarVistaCliente();
    añadirFila();
}

function cambiarVistaCliente(){
    document.getElementById("cliente-nombre").innerText = cliente.nombre;
    document.getElementById("cliente-fecha").innerText = cliente.fechaLlegada;
    document.getElementById("cliente-telefono").placeholder = cliente.telefono;
    document.getElementById("cliente-ciudad").placeholder = cliente.ciudad;
    document.getElementById("cliente-edad").placeholder = cliente.edad;
    document.getElementById("cliente-correo").placeholder = cliente.correo;
    document.getElementById("cliente-sexo").placeholder = cliente.sexo;
    document.getElementById("cliente-tipo").placeholder = cliente.tipo;
    document.getElementById("cliente-comentario").placeholder = cliente.comentario;
  
}

function añadirFila(){
    let tabla = document.getElementById("tabla-clientes");

    var nuevaFila = document.createElement("element");
    nuevaFila.setAttribute("id","cliente-fila");
    
    var nuevoBloque1 = document.createElement("bloque");
    nuevoBloque1.setAttribute("class","seccion-p");
    nuevoBloque1.innerText = clientesCartera.length;
    nuevaFila.appendChild(nuevoBloque1);

    var nuevoBloque2 = document.createElement("bloque");
    nuevoBloque2.setAttribute("class","seccion-p");
    nuevoBloque2.innerText = cliente.tipo;
    nuevaFila.appendChild(nuevoBloque2);

    var nuevoBloque3 = document.createElement("bloque");
    nuevoBloque3.setAttribute("class","seccion-g");
    nuevoBloque3.innerText = cliente.nombre;
    nuevaFila.appendChild(nuevoBloque3);

    var nuevoBloque4 = document.createElement("bloque");
    nuevoBloque4.setAttribute("class","seccion-m");
    nuevoBloque4.innerText = cliente.correo;
    nuevaFila.appendChild(nuevoBloque4);

    //Botones////////////////////////////
    var nuevoBloque5 = document.createElement("bloque");
    nuevoBloque5.setAttribute("class","seccion-p botones-mover");
    nuevaFila.appendChild(nuevoBloque5);
        //Boton1
    var nuevoBoton1 = document.createElement("button");
    nuevoBoton1.setAttribute("type","submit");
    nuevoBoton1.setAttribute("class","ima-up");
    nuevoBoton1.setAttribute("onclick","moveUp");
    nuevoBloque5.appendChild(nuevoBoton1);
        //Boton2
    var nuevoBoton1 = document.createElement("button");
    nuevoBoton1.setAttribute("type","submit");
    nuevoBoton1.setAttribute("class","ima-down");
    nuevoBoton1.setAttribute("onclick","moveDown");
    nuevoBloque5.appendChild(nuevoBoton1);

    //Options
    var nuevoBloque6 = document.createElement("bloque");
    nuevoBloque6.setAttribute("class","seccion-p");
    nuevaFila.appendChild(nuevoBloque6);

    var nuevoBotonOpt = document.createElement("button");
    nuevoBotonOpt.setAttribute("type","submit");
    nuevoBotonOpt.setAttribute("class","boton-opciones");
    nuevoBotonOpt.setAttribute("onclick","");
    nuevoBloque6.appendChild(nuevoBotonOpt);
    

    tabla.appendChild(nuevaFila);

}

function moveUp(){

}
function moveDown(){

}