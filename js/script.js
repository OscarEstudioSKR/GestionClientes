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