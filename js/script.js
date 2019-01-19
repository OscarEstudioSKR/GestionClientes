'use strict';
//Array con todos los objetos cliente
let cliente;
var clientesCartera = [];


(function(){
    cerrarInfo();

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
    document.getElementById("cliente-nombre").value = cliente.nombre;
    document.getElementById("cliente-fecha").innerText = cliente.id;
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
    var nuevoBoton2 = document.createElement("button");
    nuevoBoton2.setAttribute("type","submit");
    nuevoBoton2.setAttribute("class","ima-down");
    nuevoBoton2.setAttribute("onclick","moveDown("+cliente.id+")");
    nuevoBloque5.appendChild(nuevoBoton2);

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
    if(id > 0){
        let temp = clientesCartera[id-1];
        clientesCartera[id-1] = clientesCartera[id];
        clientesCartera[id] = temp;
        refrescarTabla(id-1, id);
        cliente=clientesCartera[id-1];
        cambiarVistaCliente();

        let filas = document.getElementsByName("elemento-fila");      
        filas[id-1].children[1].innerHTML = cliente.tipo;
        filas[id-1].children[2].innerHTML = cliente.nombre;
        filas[id-1].children[3].innerHTML = cliente.correo;

        filas[id].children[1].innerHTML = clientesCartera[id].tipo;
        filas[id].children[2].innerHTML = clientesCartera[id].nombre;
        filas[id].children[3].innerHTML = clientesCartera[id].correo;
    }
}
function moveDown(id){
    let tempId=id;
    if(id < clientesCartera.length-1){
        let temp2 = clientesCartera[id+1];
        clientesCartera[id+1] = clientesCartera[id];
        clientesCartera[id] = temp2;
        refrescarTabla(id, id+1);
        cliente=clientesCartera[id+1];
        cliente.id++;
        cambiarVistaCliente();

        let filas = document.getElementsByName("elemento-fila");
        
        filas[id+1].children[1].innerHTML = cliente.tipo;
        filas[id+1].children[2].innerHTML = cliente.nombre;
        filas[id+1].children[3].innerHTML = cliente.correo;

        filas[id].children[1].innerHTML = clientesCartera[id].tipo;
        filas[id].children[2].innerHTML = clientesCartera[id].nombre;
        filas[id].children[3].innerHTML = clientesCartera[id].correo;

        console.log(clientesCartera[id+1]);
    }
}

function options(id){
    cliente=clientesCartera[id];
    cambiarVistaCliente();
}


function cerrarInfo() {
    document.getElementById("vista-cliente").style.display="none";
    document.getElementById("vista-apagada").style.display="";
}
function abrirInfo() {
    document.getElementById("vista-cliente").style.display="block";
    document.getElementById("vista-apagada").style.display="none";
}


function eliminarCliente() {

    let filas = document.getElementsByName("elemento-fila");

    for (let i = 0; i < filas.length; i++) {

        
        if(filas[i].firstChild.innerText == cliente.id){
            clientesCartera.splice(i,1); 
            document.getElementById("tabla-clientes").removeChild(filas[i]);
            refrescarTabla(i,filas.length);
                 

        }
    }  
    cerrarInfo();
    refresh(); 
    
}


function refrescarTabla(inicio, fin){
    let filas = document.getElementsByName("elemento-fila");
    for (let i = inicio; i < fin; i++) {
        filas[i].firstChild.innerText = i;
        clientesCartera[i].id=i;
        filas[i].lastChild.firstChild.setAttribute("onclick","options("+i+")");
        filas[i].children[4].firstChild.setAttribute("onclick","moveUp("+i+")");
        filas[i].children[4].lastChild.setAttribute("onclick","moveDown("+i+")");



    }
}




function guardarCliente() {
    
    let filas = document.getElementsByName("elemento-fila");
     
    cliente.nombre = document.getElementById("cliente-nombre").value;
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