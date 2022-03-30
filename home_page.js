let indicePergunta // Variável usada em várias funções

proximaPergunta()

function proximaPergunta() {
  let tamanhoAtualListaPerguntas = perguntasEAtributos.length
  //--------- Randomicamente escolhe o índice da pergunta------
  indicePergunta = Math.floor(Math.random() * tamanhoAtualListaPerguntas)
  //----- Caso exista pergunta na lista, apresenta nova pergunta---
  if (tamanhoAtualListaPerguntas != 0) {
    let perguntaAtual = perguntasEAtributos[indicePergunta].pergunta
    document.getElementById('questao').innerHTML = perguntaAtual
    document
      .querySelectorAll('.btn') // Array todas opções de botões
      .forEach((element) => // Para cada elemento da array de botões...
        element.addEventListener('click', alternativaEscolhida))
  } else {
    fimSemAdvinhar() // Sem mais perguntas, finaliza sem sucesso na busca pelo personagem
  }
}
let respostaUsuario
let atributoPerguntaCorrente
function alternativaEscolhida(e) {
  respostaUsuario = e.target.id
  console.log(respostaUsuario)
  atributoPerguntaCorrente = perguntasEAtributos[indicePergunta].atributo
  
  // Se clica SIM, mantém somente personagens com atributo SIM 
  if (respostaUsuario == 1) {
    // filtra Obj characters com personagens correlatos
    characters = characters.filter(
      (element) => element[atributoPerguntaCorrente] == respostaUsuario,
    )
  // Se clica NÃO...
  } else if (respostaUsuario == 0) {
  // Verifica se Atributo(String) possui "_". Se tiver, mantém
  // somente personagens que não possuem o atributo, pois ele 
  // sempre estará no Personagem como '1', portanto só tirará da
  // lista de 'characters' o que possui o atributo da pergunta

    if (atributoPerguntaCorrente.includes('_')) {
      characters = characters.filter((element) => element[atributoPerguntaCorrente] != 1)
    } else {
  // Se não tiver '_', significa que o atributo somente tem
  // duas opções (sim ou não), portanto nesta condição mantém
  // na lista todos os personagens com atributo valor '0'.
      characters = characters.filter(
        (element) => element[atributoPerguntaCorrente] == respostaUsuario,
      )
    }
  } else { //--- Se usuário clica em NÃO SEI, exclui somente pergunta
  }
  excluirPergunta() // excluirPergunta()
}

function excluirPergunta() {
  console.log(characters)
  //---- Se acabaram as pergunta, executa função(fimSemAdvinhar)
  if (perguntasEAtributos.length == 0) {
    fimSemAdvinhar()
    //--- Se não, retira pegunta feita da lista de perguntas
    // da seguinte forma abaixo:
  } else {
    // Primeiro inevitavelmente exclui a pergunta feita, SEMPRE
    perguntasEAtributos.splice(indicePergunta, 1)
    // Se o atributo da pergunta conter '_' e a resposta do
    // usuário foi 'SIM', então:
    if (atributoPerguntaCorrente.includes('_') && respostaUsuario == 1) {
      // Pega o índice do '_'
      let indexOfUnderline = atributoPerguntaCorrente.indexOf('_')
      // Coloca em variável a parte do atributo entre o início
      // dele e o '_'. Ex: corDaPeleOuPelo_azul, vai ficar
      // corDaPeleOuPelo_
      let prefixoatributoPerguntaCorrente = atributoPerguntaCorrente.substr(0, indexOfUnderline)
      console.log(prefixoatributoPerguntaCorrente)
      console.log(atributoPerguntaCorrente)
      // Como usuário disse SIM, vão ser retiradas as perguntas que
      // tenham atributos com PREFIXO igual ao da pergunta atual,
      // pois não faz sentido realizar estas perguntas já que o 
      // usuário disse sim para a atual.
      perguntasEAtributos = perguntasEAtributos.filter((element) => {
      // Se o atributo 'NÃO - !' incluir o PREFIXO, mantenha na lista.
        return !element.atributo.includes(prefixoatributoPerguntaCorrente)
      })
    }
    console.log(perguntasEAtributos)
    conferirPersonagem()
  }
}

function conferirPersonagem() {
  //---Se sobrou somente 1 personagem, finaliza com advinhação
  if (characters.length == 1) {
    fimComAdvinhacao()
    // Se não, mostra próxima pergunta
  } else {
    proximaPergunta()
  }
}

function fimSemAdvinhar() {
  let elmFimDeJogo = document.getElementById('fimDeJogo')
  document.getElementById('questao').innerHTML = 'Me permita tentar novamente?'
  elmFimDeJogo.style.display = 'block'
  elmFimDeJogo.innerHTML = 'Infelizmente não advinhamos seu personagem'
  atualizaQuadroFim()
}

function fimComAdvinhacao() {
  let elmFimDeJogo = document.getElementById('fimDeJogo')
  document.getElementById('questao').innerHTML = 'Ahaaa, descobri! Acertei?'
  let elmImagemResultado = document.getElementById('imgResultado')
  elmFimDeJogo.style.display = 'block'
  elmFimDeJogo.innerHTML = `O personagem é: ${characters[0].nome}`
  elmImagemResultado.src = characters[0].imagem
  atualizaQuadroFim()
}

function atualizaQuadroFim() {
  document.getElementById('btns').style.display = 'none'
  let elmReiniciar = document.querySelector('.reiniciar')
  elmReiniciar.style.display = 'block'
  elmReiniciar.innerHTML = 'Reiniciar'
  elmReiniciar.addEventListener('click', () => (window.location = 'index.html'))
}
