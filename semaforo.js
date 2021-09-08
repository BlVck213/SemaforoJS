"use strict"

const semaforo = document.getElementById("semaforo")
const automatico = document.getElementById("automatico")
let idInterval

const semaforoDesligado = () => semaforo.src.includes("desligado")
 
const isVermelho = () => semaforo.src.includes("vermelho")

const isAmarelo = () => semaforo.src.includes("amarelo")

const isVerde = () => semaforo.src.includes("verde")

function semaforoVermelho(){
    semaforo.src = "img/vermelho.png"
}

function semaforoAmarelo(){
    semaforo.src = "img/amarelo.png"
    
}

function semaforoVerde(){
    semaforo.src = "img/verde.png"
}

function trocarSemaforo(){
    if (semaforoDesligado()){
        semaforoVermelho()
    } else if (isVermelho()){
        semaforoAmarelo()
    } else if (isAmarelo()){
        semaforoVerde()
    } else if (isVerde()){
        desligarSemaforo()
    }
}

function semaforoAutomatico(){
    if(automatico.textContent == "Automático"){
      idInterval = setInterval(trocarSemaforo, 750)
       automatico.textContent = "Parar"
} else {
    clearInterval(idInterval)
    automatico.textContent = "Automático"
}
}

function desligarSemaforo(){
    semaforo.src = "img/desligado.png"
}


function semaforoVermelhoResetar() {
    clearInterval(idInterval)
    automatico.textContent == "Automático"
    semaforoVermelho()
}

function semaforoAmareloResetar() {
    clearInterval(idInterval)
    automatico.textContent == "Automático"
    semaforoAmarelo()
}

function semaforoVerdeResetar() {
    clearInterval(idInterval)
    automatico.textContent == "Automático"
    semaforoVerde()
}

document.getElementById("vermelho")
.addEventListener("click", semaforoVermelhoResetar)

document.getElementById("amarelo")
.addEventListener("click", semaforoAmareloResetar)

document.getElementById("verde")
.addEventListener("click", semaforoVerdeResetar)

document.getElementById("automatico")
.addEventListener("click", semaforoAutomatico)

document.getElementById("semaforo")
.addEventListener("dblclick", desligarSemaforo)