// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    var amigo = document.getElementById("amigo").value.toString().trim();

    if (amigo == "") {
        alert("Por favor ingrese un nombre válido");
        return;
    } else if (listaAmigos.includes(amigo)) {
        alert("El nombre ya está agregado");
        return;
    }

    listaAmigos.push(amigo);

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

    var resultadohtml = document.getElementById("resultado");

    var random = Math.floor(Math.random() * listaAmigos.length);

    var amigoSorteado = listaAmigos[random];

    resultadohtml.innerHTML = "El amigo sorteado es: " + amigoSorteado;

    document.getElementById("listaAmigos").innerHTML = "";    
    listaAmigos = [];
}