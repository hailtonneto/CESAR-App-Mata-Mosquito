//Identificar largura da janela
function ajustaLargura() {
    return window.innerWidth;
}
    
//Identificar altura da janela
function ajustaAltura() {
    return window.innerHeight;
}

//Ajustar largura e altura ao redimensionar a janela do browser
function ajustaPalcoJogo() {
    let x = ajustaLargura();
    let y = ajustaAltura();
    console.log(x, y);
}

//Gerar posição aleatória na horizontal da janela
function gerarPosicaoAleatoriaLargura(){
    let posAleatoriaLargura = Math.floor(Math.random() * ajustaLargura() - 150);

    if (posAleatoriaLargura < 0) {
        return 0;
    } else {
        return posAleatoriaLargura;
    }
}

//Gerar posição aleatória na vertical da janela
function gerarPosicaoAleatoriaAltura(){
    let posAleatoriaAltura = Math.floor(Math.random() * ajustaLargura() - 150);
    
    if (posAleatoriaAltura < 0) {
        return 0;
    } else {
        return posAleatoriaAltura;
    }
}

var vidas = 1;
    
//Criar o elemento HTML que representa o mosquito
function criarMosquitoAleatorio(){
    //Caso já exista um um mosquito, removê-lo
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();

        if (vidas < 3) {
            document.getElementById("vida-" + vidas).src = "../img/coracao_vazio.png";
            vidas++;
        }else {
            window.location.href = "../gameover.html";
        }
    } else {
        //Cria um novo mosquito
        let mosquito = document.createElement("img");
        mosquito.src = "img/mosquito.png";
        mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
        mosquito.id = "mosquito";
        mosquito.onclick = function(){
            this.remove()
            console.log("elemento removido")
        }

        //Inserir o mosquito de tamanho aleatório em uma posição aleatória
        mosquito.style.left = gerarPosicaoAleatoriaLargura() + "px";
        mosquito.style.top = gerarPosicaoAleatoriaAltura() + "px";
        mosquito.style.position = "absolute";

        //Anexa o mosquito criado ao documento
        document.body.appendChild(mosquito);
    }
}

//Gerar um tamanho aleatório para o mosquito
function tamanhoAleatorio() {
    let tamanhoMosquito = Math.floor(Math.random() * 3);

    switch (tamanhoMosquito) {
        case 0:
            return "mosquito-p";
            break;
        case 1:
            return "mosquito-m";
            break;
        case 2:
            return "mosquito-g";
            break;
        default:
            break;
    }
}

//Escolher um lado aleatório para o posicionamento do mosquito
function ladoAleatorio() {
    let ladoMosquito = Math.floor(Math.random() * 2);
    
    switch (ladoMosquito) {
        case 0:
            return "lado-a";
            break;
        case 1:
            return "lado-b";
            break;
        default:
            break;
    }
}

//Cronômetro de 10s
var tempo = 11;
var cronometro = setInterval(function () {

tempo -= 1;
if (tempo < 0) {
        clearInterval(cronometro);
        window.location.href = "../vitoria.html";
    } else {
        document.getElementById("cronometro").innerHTML = tempo;
    }
}, 1000);
    
ajustaPalcoJogo();

setInterval(() => {
    criarMosquitoAleatorio();
}, 1000);