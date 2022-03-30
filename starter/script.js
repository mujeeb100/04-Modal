'use strict';
// Modal applicatoin in javaScript
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//click on button to open the model
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// //side button click
// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
