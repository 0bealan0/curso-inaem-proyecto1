'use strict';
// identificar elementos del dom
const scoreUno = document.getElementById('score--0');
const currentUno = document.getElementById('current--0');
const btnInicia = document.querySelector('.btn--roll');
const btnPuntua = document.querySelector('.btn--hold');
const btnResetea = document.querySelector('.btn--new');
const scoreDos = document.getElementById('score--1');
const currentDos = document.getElementById('current--1');
const dado = document.querySelector('.dice');
const playerUno = document.querySelector('.player--0');
const playerDos = document.querySelector('.player--1');
let current, scores, activePlayer, playing;
playing = true;

console.log(scoreUno);
// const scoreTexts = document.querySelectorAll('.score');
// for (const scoreText of scoreTexts) scoreText.textContent = '';

const init = function () {
  scores = [0, 0];
  current = 0;
  activePlayer = 0;
  // scoreUno.textContent = 0;
  // scoreDos.textContent = 0;
  // currentUno.textContent = 0;
  // currentDos.textContent = 0;
  dado.classList.add('hidden');
  for (const elemDOM of [currentDos, currentUno, scoreDos, scoreUno])
    elemDOM.textContent = 0;
  for (const playerEl of [playerUno, playerDos])
    playerEl.classList.remove('player--winner');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
// function cambiar de jugador
const switchPlayer = function () {
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  playerUno.classList.toggle('player--active');
  playerDos.classList.toggle('player--active');
};
init();
// Evento inicia
btnInicia.addEventListener('click', function () {
  if (playing) {
    const numero = Math.trunc(Math.random() * 6 + 1);
    // dado.src=`dice-${numero}`
    dado.classList.remove('hidden');
    switch (numero) {
      case 1:
        dado.src = 'dice-1.png';
        break;
      case 2:
        dado.src = 'dice-2.png';
        break;
      case 3:
        dado.src = 'dice-3.png';
        break;
      case 4:
        dado.src = 'dice-4.png';
        break;
      case 5:
        dado.src = 'dice-5.png';
        break;
      case 6:
        dado.src = 'dice-6.png';
        break;
    }
    if (numero === 1) {
      // llamo a la funcion cambiar de jugador
      switchPlayer();
    } else {
      current += numero;
      document.querySelector(`#current--${activePlayer}`).textContent = current;
    }
  }
});

// Evento puntua
btnPuntua.addEventListener('click', function () {
  if (playing) {
    // sumo las variables
    scores[activePlayer] += current;
    // lo mando al dom
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // document.querySelector(`#score--${activePlayer}`).textContent =
    //   Number(document.querySelector(`#score--${activePlayer}`).textContent) +
    //   current;

    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
// evento resetea
btnResetea.addEventListener('click', function () {
  dado.classList.remove('hidden');
  init();
});
