'use strict';
//Array con todos los objetos cliente
var clientesCartera = [];




(function(){
    refresh();
})();



function refresh(){
    //Numero de clientes
    document.getElementById("num-clientes").innerText = clientesCartera.length;
}

function nuevoCliente(){
    let a = new Cliente("regular","Skr","correo@web.com", 666666666,"sin ciudad","sin sexo","Hoy");
    clientesCartera.push(a);
    refresh();
}