let amigos = [];

let btnGuardar = document.querySelector("#btnGuardar");
let btnCancelar = document.querySelector("#btnCancelar");
let Borrar = document.querySelector("Cerrar")
let lista = document.querySelector(".listaAmigos");
let formulario = document.querySelector("#formulario");
let error=document.querySelector("#error")
let evaluacion=document.querySelectorAll("evaluador")

pintar();

function limpiar() {
    formulario[0].value = "";
    formulario[1].value = "";
    formulario[2].value = "";
    formulario[3].value = "";
}

function pintar() {
    if (amigos.length > 0) {
        lista.innerHTML = "";
        amigos.forEach((contacto, index) => {

            let amigo = document.createElement("div");
            amigo.innerHTML = `<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}" />Detalles</button><button class="eliminarContacto" indice="${index}">Borrar</button>`;
            lista.appendChild(amigo);
        });
        let botones = document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click", () => {
                showdetallesAmigo(element.children[0].value);
            });
        }
        botones = document.getElementsByClassName("eliminarContacto");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click", () => {
                amigos.splice(element.getAttribute("indice"), 1);
                pintar();
            })
        }
    }
    else {
        lista.innerHTML = "<h2>No tenemos amigos</h2>";
    }
}

function showdetallesAmigo(tel) {
    let Detalles = document.getElementById("detallesAmigo");
    let amigo = amigos.find(a => {
        if (a.telefono == tel) {
            return a;
        }
    });

    Detalles.innerHTML = `<img src="${amigo.foto}"alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Telefono:</span>${amigo.telefono}</p>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button id="cerrar">Cerrar</button>`;
    Detalles.classList.remove("oculto");

    let cerrar = document.querySelector("#cerrar");
    cerrar.addEventListener("click", (event) => {
        Detalles.classList.add("oculto")

    });
     telefono.some(element=>{   
        if(element.telefono=="4321")
        return true;
     })
    
}

btnCancelar.addEventListener("click", (event) => {
    limpiar();
    event.preventDefault();
});

btnGuardar.addEventListener("click", function(event) {

     if(formulario[0].value===null|| formulario[0].value===""){
        error.push("ingrese tu nombre");
        event.preventDefault();
     }
        if(formulario[1].value=== null|| formulario[1].value===""){
        error.push("ingrese su numero de telefono");
        event.preventDefault();

     }
     if(formulario[2].value=== null|| formulario[2].value===""){
        error.push("ingrese su correo");
        event.preventDefault();
     }
        if(formulario[3].value=== null|| formulario[3].value===""){
        error.push("ingrese su foto");
       event.preventDefault();
     }
    
     else{
        let contacto = {
            nombre: formulario["nombre"].value,
            telefono: formulario["telefono"].value,
            correo: formulario["correo"].value,
            foto: formulario["foto"].value,
        };
        amigos.push(contacto);
        limpiar();
        pintar();
        event.preventDefault();
     }
}) 


 