"use strict"

const semaforo = document.getElementById("semaforo")

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
    const automatico = document.getElementById("automatico")
       setInterval(trocarSemaforo, 750)
       automatico.disabled = true
}

function desligarSemaforo(){
    semaforo.src = "img/desligado.png"
}

document.getElementById("vermelho")
.addEventListener("click", semaforoVermelho)

document.getElementById("amarelo")
.addEventListener("click", semaforoAmarelo)

document.getElementById("verde")
.addEventListener("click", semaforoVerde)

document.getElementById("automatico")
.addEventListener("click", semaforoAutomatico)

document.getElementById("semaforo")
.addEventListener("dblclick", desligarSemaforo)