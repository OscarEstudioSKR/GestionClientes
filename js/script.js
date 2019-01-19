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

    //Tabla blanca
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
    document.getElementById("cliente-nombre").innerText = cliente.nombre;
    document.getElementById("cliente-fecha").innerText = cliente.fechaLlegada;
    document.getElementById("cliente-telefono").value = cliente.telefono;
    document.getElementById("cliente-ciudad").value = cliente.ciudad;
    document.getElementById("cliente-edad").value = cliente.edad;
    document.getElementById("cliente-correo").value = cliente.correo;
    document.getElementById("cliente-sexo").value = cliente.sexo;
    document.getElementById("cliente-tipo").value = cliente.tipo;
    document.getElementById("cliente-comentario").value = cliente.comentario;
    refresh();
  
}


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
    nuevoBoton1.setAttribute("onclick","moveUp("+cliente.id+")");
    nuevoBloque5.appendChild(nuevoBoton1);
        //Boton2
    var nuevoBoton1 = document.createElement("button");
    nuevoBoton1.setAttribute("type","submit");
    nuevoBoton1.setAttribute("class","ima-down");
    nuevoBoton1.setAttribute("onclick","moveDown("+cliente.id+")");
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

function moveUp(id){

}
function moveDown(id){

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
        filas[i].children[4].firstChild.setAttribute("onclick","moveUp("+i+")");
        filas[i].children[4].lastChild.setAttribute("onclick","moveDown("+i+")");
    }
}




function guardarCliente() {
    let filas = document.getElementsByName("elemento-fila");
     
    cliente.nombre = document.getElementById("cliente-nombre").innerText;

    cliente.telefono = document.getElementById("cliente-telefono").value;
    cliente.ciudad = document.getElementById("cliente-ciudad").value;
    cliente.edad = document.getElementById("cliente-edad").value;
    cliente.correo = document.getElementById("cliente-correo").value;
    cliente.sexo = document.getElementById("cliente-sexo").value;
    cliente.tipo = document.getElementById("cliente-tipo").value;
    cliente.comentario = document.getElementById("cliente-comentario").value;

    clientesCartera[cliente.id] = cliente;

    filas[cliente.id].children[1].innerHTML = cliente.tipo;
    filas[cliente.id].children[2].innerHTML = cliente.nombre;
    filas[cliente.id].children[3].innerHTML = cliente.correo;
    
    refresh();
    cerrarInfo();
}