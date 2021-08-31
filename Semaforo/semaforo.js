"use strict"

const semaforo = document.getElementById("semaforo")
let idInterval
const semaforoDesligado = () => semaforo.src.includes("desligado")

function semaforoVermelho(){
    semaforo.src = "img/vermelho.png"
    vermelho.disabled = true
    amarelo.disabled = false
    verde.disabled = false
    automatico.disabled = false
}

function semaforoAmarelo(){
    semaforo.src = "img/amarelo.png"
    vermelho.disabled = false
    amarelo.disabled = true
    verde.disabled = false
    automatico.disabled = false
}

function semaforoVerde(){
    semaforo.src = "img/verde.png"
    vermelho.disabled = false
    amarelo.disabled = false
    verde.disabled = true
    automatico.disabled = false
}

function trocarSemaforo(){
    if(semaforoDesligado()){
        semaforoVermelho()
    } else{
        semaforoVerde()
    }
}

function semaforoAutomatico(){
    setInterval(trocarSemaforo, 1000)
}

document.getElementById("vermelho")
.addEventListener("click", semaforoVermelho)

document.getElementById("amarelo")
.addEventListener("click", semaforoAmarelo)

document.getElementById("verde")
.addEventListener("click", semaforoVerde)

document.getElementById("automatico")
.addEventListener("click", semaforoAutomatico)