'use strict';
//Array con todos los objetos cliente
let cliente;
var clientesCartera = [];






(function(){
    //nuevoCliente();
    //refresh();
    //refreshTabla();
})();



function refresh(){
    //Numero de clientes
    document.getElementById("num-clientes").innerText = clientesCartera.length;
    document.getElementById("cliente-id").innerText = cliente.id;
    document.getElementById("lista-clientes").innerText = clientesCartera;
    
}

function nuevoCliente(){
    let a = new Cliente(clientesCartera.length,"regular","sin nombre","correo@web.com", 666666666,"sin ciudad",99,"sin sexo","Hoy","sin comentarios");
    clientesCartera.push(a);
    cliente = a;
    cambiarVistaCliente();
    añadirFila();

}

function cambiarVistaCliente(){
    abrirInfo();
    document.getElementById("cliente-nombre").innerText = cliente.nombre+" #"+cliente.id;
    document.getElementById("cliente-fecha").innerText = cliente.fechaLlegada;
    document.getElementById("cliente-telefono").placeholder = cliente.telefono;
    document.getElementById("cliente-ciudad").placeholder = cliente.ciudad;
    document.getElementById("cliente-edad").placeholder = cliente.edad;
    document.getElementById("cliente-correo").placeholder = cliente.correo;
    document.getElementById("cliente-sexo").placeholder = cliente.sexo;
    document.getElementById("cliente-tipo").placeholder = cliente.tipo;
    document.getElementById("cliente-comentario").placeholder = cliente.comentario;
    refresh();
  
}
/*function refreshTabla(){
    for(let i=0; i<clientesCartera.length;i++){
        document.getElementById("cliente-fila").delete;
    }
    for(let i=0; i<clientesCartera.length;i++){
        cliente = clientesCartera[i];
        añadirFila();
    }
}*/

function añadirFila(){
    let tabla = document.getElementById("tabla-clientes");

    var nuevaFila = document.createElement("element");
    nuevaFila.setAttribute("id","cliente-fila");
    nuevaFila.setAttribute("name","elemento-fila");
    
    var nuevoBloque1 = document.createElement("bloque");
    nuevoBloque1.setAttribute("class","seccion-p id");
    nuevoBloque1.innerText = clientesCartera.length-1;
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
    nuevoBotonOpt.setAttribute("onclick","options("+cliente.id+")");
    nuevoBloque6.appendChild(nuevoBotonOpt);
    

    tabla.appendChild(nuevaFila);

}

function moveUp(){

}
function moveDown(){

}

function options(id){
    console.log(id);
    cliente=clientesCartera[id];
    cambiarVistaCliente();
}


function cerrarInfo() {
    document.getElementById("vista-cliente").style.display="none";
}
function abrirInfo() {
    document.getElementById("vista-cliente").style.display="block";
}


function eliminarCliente() {

    let filas = document.getElementsByName("elemento-fila");

    for (let i = 0; i < filas.length; i++) {

        
        if(filas[i].firstChild.innerText == cliente.id){
            clientesCartera.splice(i,1); 
            document.getElementById("tabla-clientes").removeChild(filas[i]);
            refrescarTabla(i);
                 

        }
    }  
    cerrarInfo();
    refresh(); 
    
}


function refrescarTabla(inicio){
    let filas = document.getElementsByName("elemento-fila");
    for (let i = inicio; i < filas.length; i++) {
        filas[i].firstChild.innerText = i;
        clientesCartera[i].id=i;
        filas[i].lastChild.firstChild.setAttribute("onclick","options("+i+")");
    }
}




function guardarCliente() {
     
    cliente.nombre = document.getElementById("cliente-nombre").innerText;

    cliente.telefono = document.getElementById("cliente-telefono").placeholder;
    cliente.ciudad = document.getElementById("cliente-ciudad").placeholder;
    cliente.edad = document.getElementById("cliente-edad").placeholder;
    cliente.correo = document.getElementById("cliente-correo").placeholder;
    cliente.sexo = document.getElementById("cliente-sexo").placeholder;
    cliente.tipo = document.getElementById("cliente-tipo").placeholder;
    cliente.comentario = document.getElementById("cliente-comentario").placeholder;

    refresh();
}