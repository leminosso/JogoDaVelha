// iniciar variáveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let tieGame = false;
let restartedGame = false;

// começa o jogador 1
let firstPlayer = 0;

let symbols = ["o", "x"];

let winStates = [
  // mapeamento de possibilidades de vencer na horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // mapeamento de possibilidade de vencer na vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //  mapeamento de possibilidade de vencer na diagonal
  [0, 4, 8],
  [2, 4, 6],
];

let countTurn0 = 0;
let countTurn1 = 0;

function handleMove(position) {
  if (gameOver) {
    return;
  }
  // a posição do board irá receber o simbolo do jogador da vez
  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    // a mesma coisa que gameOver == false
    if (!gameOver) {
      // playerTime = playerTime == 0 ? 1 : 0;
      // alterna entre a vez de cada jogador e conta o numero de pinos de cada jogador no jogo
      if (playerTime == 0) {
        countTurn0++;
        playerTime = 1;
      } else {
        countTurn1++;
        playerTime = 0;
      }
    }
    return gameOver;
  }
}

// função para verificar se houve um ganhador na partida
function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    // aqui vai identificar o primeiro index de cada array, no primeiro é o 0, no segundo é 1
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    // faz a checagem se as posições são iguais excluindo a posição vazia do início do jogo
    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }

  return false;
}

function restartGame() {
  // reiniciar as variáveis
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  tieGame = false;
  countTurn0 = 0;
  countTurn1 = 0;

  // troca quem começa a partida no jogo seguinte
  if (firstPlayer == 0) {
    playerTime = 1;
    firstPlayer = 1;
  } else {
    playerTime = 0;
    firstPlayer = 0;
  }
  // chama a função para limpar o tabuleiro
  updateSquares();
}