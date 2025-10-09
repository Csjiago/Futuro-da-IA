const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const  perguntas = [
{

    enunciado:
     "Um assistente de voz como a Siri ou a Alexa usa inteligência artificial para entender seus comandos.",
    alternativas:["Verdadeiro", "Falso"],

},
{
    enunciado: "A IA consegue ter sentimentos e emoções da mesma forma que os humanos.",
    alternativas: ["Verdadeiro", "Falso"],
},
{
    enunciado: "Carros autônomos, que dirigem sozinhos, são um exemplo de aplicação da IA?",
alternativas:["Verdadeiro", "Falso"],
    

},
{

        enunciado: "MACHINE LEARNING é a capacidade de uma máquina aprender sem ser explicitamente programada para cada tarefa. ",
alternativas:["Verdadeiro", "Falso"],
},
{

        enunciado: "Algoritmos de IA são usados apenas em filmes de ficção científica.",
alternativas:["Verdadeiro", "Falso"],
},

 {
        enunciado: "A IA tem o potencial de automatizar algumas tarefas, o que pode impactar o futuro do trabalho.",
alternativas:["Verdadeiro", "Falso"],

   },

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
if (atual >= perguntas.lenght){
    mostraResultado();
    return;
}
}

 function mostraPergunta() {
 PerguntaAtual = perguntas[atual];
 caixaPerguntas.textContent = perguntaAtual.enunciado;
 mostraAlternativas();
 }

 function mostraAlternativas(){
     for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
     }
    }

    function respostaSelecionada (opcaoSelecionada){
     const afirmacoes = opcaoSelecionada.afirmacao;
     historiaFinal += afirmacoes + " ";
     atual++;
     mostraPerguntas();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "pergunta";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "Resposta";
    }

    mostraPerguntas();
    