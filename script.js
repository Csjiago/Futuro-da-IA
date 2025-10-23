const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um assistente de voz como a Siri ou a Alexa usa inteligência artificial para entender seus comandos.",
        alternativas: [
            { texto: "Verdadeiro", afirmacao: "O uso da IA em assistentes de voz é um fato. " },
            { texto: "Falso", afirmacao: "A IA em assistentes de voz não é usada para entender comandos. " }
        ],
    },
    {
        enunciado: "A IA consegue ter sentimentos e emoções da mesma forma que os humanos.",
        alternativas: [
            { texto: "Verdadeiro", afirmacao: "A IA possui capacidades emocionais humanas. " },
            { texto: "Falso", afirmacao: "A IA simula, mas não tem sentimentos e emoções humanas. " }
        ],
    },
    {
        enunciado: "Carros autônomos, que dirigem sozinhos, são um exemplo de aplicação da IA?",
        alternativas: [
            { texto: "Verdadeiro", afirmacao: "Carros autônomos são uma aplicação real da IA. " },
            { texto: "Falso", afirmacao: "Carros autônomos não utilizam Inteligência Artificial. " }
        ],
    },
    {
        enunciado: "MACHINE LEARNING é a capacidade de uma máquina aprender sem ser explicitamente programada para cada tarefa.",
        alternativas: [
            { texto: "Verdadeiro", afirmacao: "Machine Learning é sobre aprendizado autônomo. " },
            { texto: "Falso", afirmacao: "Machine Learning requer programação explícita para cada tarefa. " }
        ],
    },
    {
        enunciado: "Algoritmos de IA são usados apenas em filmes de ficção científica.",
        alternativas: [
            { texto: "Verdadeiro", afirmacao: "A IA só existe no mundo da ficção. " },
            { texto: "Falso", afirmacao: "A IA é amplamente usada em aplicações do mundo real. " }
        ],
    },
    {
        enunciado: "A IA tem o potencial de automatizar algumas tarefas, o que pode impactar o futuro do trabalho.",
        alternativas: [
            { texto: "Verdadeiro", afirmacao: "A automação por IA pode transformar o mercado de trabalho. " },
            { texto: "Falso", afirmacao: "A IA não tem impacto na automação de tarefas. " }
        ],
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    // Corrigido de .lenght para .length e chamada para mostraResultado()
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    // Limpa as alternativas anteriores
    caixaAlternativas.textContent = ""; 

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        // Acessa a propriedade 'texto'
        botaoAlternativas.textContent = alternativa.texto; 
        
        // Passa o objeto completo para a função
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    // Acessa a propriedade 'afirmacao'
    const afirmacoes = opcaoSelecionada.afirmacao; 
    historiaFinal += afirmacoes;

    atual++;

    // Chamada corrigida para mostraPergunta()
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz Concluído!";
    textoResultado.textContent = historiaFinal; 
    caixaAlternativas.textContent = "";
}

// Chamada inicial corrigida para mostraPergunta()
mostraPergunta();