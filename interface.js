   document.addEventListener("DOMContentLoaded", () => {
  // elementos do square
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });

  // id de pontuação inicial dos jogadores quando a página é carregada
  let player1Wins = document.getElementById("player1Wins");
  let player2Wins = document.getElementById("player2Wins");
  player1Wins.innerHTML = 0;
  player2Wins.innerHTML = 0;
});

// zera a pontuação dos players
let ctPlayer1 = 0;
let ctPlayer2 = 0;

function handleClick(event) {
  // verifica o nome dos jogadores
  let player1 = document.getElementById("player1");
  let player2 = document.getElementById("player2");
  let player1Name = player1.value;
  let player2Name = player2.value;
  let result = document.getElementById('result');

  let square = event.target;
  let position = square.id;

  let playerName = "";

  if (handleMove(position)) {
    // identifica e pontua o vencedor
    if (playerTime == 0) {
      ctPlayer1++;
      player1Wins.innerHTML = ctPlayer1;
    } else {
      ctPlayer2++;
      player2Wins.innerHTML = ctPlayer2;
    }

    // a mensagem vai aparecer 10ms depois da ultima jogada, assim o ultimo objeto adicionado aparece na tela, se não colocar o timeout a msg aparece mas o objeto não
    if (player1Name != "" || player2Name != "") {
      if (playerTime == 0) {
        playerName = player1Name;
      } else {
        playerName = player2Name;
      }

      setTimeout(() => {
        alert("O jogo acabou! \n O vencedor foi " + playerName);
      }, 20);
    } else if (player1Name == "" || player2Name == "") {
      if (playerTime == 0) {
        playerName = "O";
      } else {
        playerName = "X";
      }
      setTimeout(() => {
        alert("O jogo acabou! \n O vencedor foi " + playerName);
      }, 20);
    }
  }
  // verifica se houve empate no jogo
  if ((countTurn0 >= 5 || countTurn1 >= 5) && !gameOver) {
    setTimeout(() => {
      alert("O jogo empatou!");
    }, 20);
  }
  updateSquare(position);
}

// atualiza apenas o quadrado
function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

// atualiza todo o board
function updateSquares() {
 // identificando os nomes do jogadores 
  let player1 = document.getElementById("player1");
  let player2 = document.getElementById("player2");
  let player1Name = player1.value;
  let player2Name = player2.value;
  let playerName = "";

  // mapeando os quadrados
  let squares = document.querySelectorAll(".square");
  
  // função para limpar o tabuleiro
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol == "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });

  // verifica a vez do jogador
  if (player1Name != "" || player2Name != "") {
    if (playerTime == 0) {
      playerName = player1Name;
    } else {
      playerName = player2Name;
    }

    setTimeout(() => {
      alert("O jogo foi reiniciado! \n Agora é a vez do jogador " + playerName);
    }, 20);
  } else if (player1Name == "" || player2Name == "") {
    if (playerTime == 0) {
      playerName = "O";
    } else {
      playerName = "X";
    }
    setTimeout(() => {
      alert("O jogo foi reiniciado! \n Agora é a vez do jogador " + playerName);
    }, 20);
  }
}

// reseta as pontuações e limpa as variáveis ctPlayer1 e ctPlayer2
function restartWins() {
  ctPlayer1 = 0;
  ctPlayer2 = 0;
  player1Wins.innerHTML = ctPlayer1;
  player2Wins.innerHTML = ctPlayer2;

}
