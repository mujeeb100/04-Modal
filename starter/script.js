"use strict";
// Modal applicatoin in javaScript
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

//1st function for the openModal
const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//2nd function for the closeModal

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
