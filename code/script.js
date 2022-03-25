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
console.log(scoreUno);
// const scoreTexts = document.querySelectorAll('.score');
// for (const scoreText of scoreTexts) scoreText.textContent = '';

scoreUno.textContent = 0;
scoreDos.textContent = 0;

// Evento inicia

btnInicia.addEventListener('click', function () {
  const numero = Math.trunc(Math.random() * 6 + 1);
  currentUno.textContent = numero;
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
  }
});

// function cambiar de jugador

// Evento puntua
btnPuntua.addEventListener('click', function () {
  currentUno.textContent = scoreUno;
});
