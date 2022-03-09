'use strict';
//identificar elementos del dom
const scoreUno = document.getElementById('#score--0');
const currentUno = document.getElementById('#current--0');
const btnInicia = document.querySelector('.btn--roll');
const btnPuntua = document.querySelector('.btn--hold');
const btnResetea = document.querySelector('.btn--new');
const scoreDos = document.getElementById('#score--1');
const currentDos= document.getElementById('#current--1');
const dado= document.querySelector('.dice');
 const numAleatorio= Math.trunc(Math.random(1,6))
 console.log(numAleatorio);
// Evento inicia
btnInicia.addEventListener('click', function(){   
const numAleatorio= Math.trunc(Math.random(1,6));

  if(numero=1){ 
      if(numero=currentUno){
            currentUno=0;
            scoreUno=0;
      }else{
          currentDos=0;
          scoreDos=0;
      }
      numero=currentUno??currentDos;
  switch(numero){
      case 1:dado.src="dice-1.png"; break;
      case 2:dado.src="dice-2.png"; break;
      case 3:dado.src="dice-3.png"; break;
      case 4:dado.src="dice-4.png"; break;
      case 5:dado.src="dice-5.png"; break;
      case 6:dado.src="dice-6.png"; break;
                       
  }

  }