// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.toString().trim();

    if (amigo == "") {
        alert("Por favor ingrese un nombre válido");
        return;
    }

    let existe = listaAmigos.some((value) => value.toString().toLowerCase() === amigo.toLowerCase())
    
    if (existe) {
        alert("El nombre ya está agregado");
        return;
    }

    let amigoFormateado = String(amigo).charAt(0).toUpperCase() + String(amigo).slice(1);

    listaAmigos.push(amigoFormateado);

    let listaAmigoshtml = document.getElementById("listaAmigos");
    listaAmigoshtml.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {        
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaAmigoshtml.appendChild(li);
    }

    document.getElementById("amigo").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function sortearAmigo() {
    if (listaAmigos.length <= 0) {
        alert("No hay amigos agregados a la lista");
        return;
    }

    let resultadohtml = document.getElementById("resultado");

    let random = Math.floor(Math.random() * listaAmigos.length);

    let amigoSorteado = listaAmigos[random];

    resultadohtml.innerHTML = "El amigo sorteado es: " + amigoSorteado;

    document.getElementById("listaAmigos").innerHTML = "";    
    listaAmigos = [];
}