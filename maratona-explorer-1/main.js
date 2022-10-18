const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// CLICAR EM FAZER PERGUNTA

function fazerPergunta() {
  // CRIANDO CONDIÇÃO EM QUE A PESSOA NÃO DIGITOU NADA E FALANDO PRA ELA DIGITAR

  if (inputPergunta.value == '') {
    alert('Escreve a pergunta, amadx.')
    return
  }

  // DESABILITAR O BOTÃO, FAZENDO A RESPOSTA NÃO APARECER, MUDANDO DE RESPOSTA DENTRO DA MESMA PERGUNTA, CASO A PESSOA CLIQUE VÁRIAS VEZES

  buttonPerguntar.setAttribute('disabled', true)
  
  // PEGANDO O QUE A PESSOA ESCREVE

  const pergunta = '<div>' + inputPergunta.value + '</div>'
 
  // GERANDO NÚMERO ALEATÓRIO
  
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1
  
  // FAZER A RESPOSTA SUMIR DEPOIS DE 3 SEGUNDOS

  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
