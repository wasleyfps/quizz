// Declaração de Variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers":[
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema Operacional",
        "correct": true
      },
      {
        "answer": "Banco de Dados",
        "correct": true
      },
    ]
  }
]

// Substituição do Quizz par a primeira pergunta
function init(){
  // Criar a primeira pergunta
  createQuestion(0);
}

// Cria uma pergunta
function createQuestion(i){

  //Limpar a questão anterior
  const oldButtons = answersBox.querySelectorAll("button");
  // Fazendo um looping nesses caras
  oldButtons.forEach(function(btn){
    btn.remove();
  });

  // Alterar o Texto da Pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;
}

// Inicialização do Quizz
init();

