// CRIAR UMA VARIAVEL DE RESPOSTA
const elementoResposta = document.querySelector('#resposta')
// O 'querySelector' vai procurar o celetor que eu defini na string, dentro do meu documento
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Sinais apontam que sim.'
]

//  CLICAR EM FAZER PERGUNTA
function fazerPergunta() {
  if (inputPergunta.value == '') {
    // A propriedade 'value' indica o valor da variavel, no caso dessa, mostra a resposta do usuario no console.
    alert('Digite sua pergunta')
    return
    // Usei esse 'return' para que se caso a resposta seja vazia ele para o código e retorna para o if.
  }

  buttonPerguntar.setAttribute('disabled', true)
  // o 'setAttribute' faz com que eu adicione um atributo na minha tag.

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // GERAR UM NÚMERO ALEATORIO
  const totalRespostas = respostas.length
  // A propriedade 'length' me retorna a quantidade de respostas da 'array'
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  // O 'math.floor' arredonda o numero para o piso então se eu tiver 1.2, ele arredonda para 1.
  // O 'math.random' me gera um número aleatorio entre 0 e 1.

  console.log(respostas[numeroAleatorio])
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  // O 'innerHtml' colocar o conteúdo dentro da tag que eu especifiquei na variavel

  elementoResposta.style.opacity = 1

  // SUMIR A RESPOSTA DEPOIS DE 3 SEGUNDOS
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
    // O "removeAttribute" vai remover o atributo que eu dei para minha tag através do 'setAttribute'.
  }, 3000)
  // 3000 significa o tempo que a minha função vai ser executada em milesegundos, e para definir um tempo, usamos o argumento 'setTimeout',
}
