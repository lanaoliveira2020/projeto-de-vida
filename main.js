const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");

// Ajustando as novas datas de objetivo
const tempoObjetivo1 = new Date();
tempoObjetivo1.setDate(tempoObjetivo1.getDate() + 243);  // 243 dias a partir de hoje

const tempoObjetivo2 = new Date();
tempoObjetivo2.setHours(tempoObjetivo2.getHours() + 5840);  // 5840 horas a partir de agora

const tempoObjetivo3 = new Date();
tempoObjetivo3.setSeconds(tempoObjetivo3.getSeconds() + 350400);  // 350400 segundos a partir de agora

const tempoObjetivo4 = new Date();
tempoObjetivo4.setSeconds(tempoObjetivo4.getSeconds() + 21024023);  // 21024023 segundos a partir de agora

// Atualizando o array de tempos
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const tempoRestante = calculaTempo(tempos[i]);

        // Atualizando os elementos com os valores calculados
        document.getElementById("dias" + i).textContent = tempoRestante[0];
        document.getElementById("horas" + i).textContent = tempoRestante[1];
        document.getElementById("min" + i).textContent = tempoRestante[2];
        document.getElementById("seg" + i).textContent = tempoRestante[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();