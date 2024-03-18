"use strict";

const btnProfile = document.querySelector(".card__profile .btn");
const btnShare = document.querySelector(".card__share .btn");
const cardProfileEl = document.querySelector(".card__profile");
const cardShareEl = document.querySelector(".card__share");
const cardShareDesktopEl = document.querySelector(".card__share--desktop");

let isShareOpen = false;

btnProfile.addEventListener("click", function () {
  if (window.innerWidth <= 780) {
    cardProfileEl.classList.add("visually-hidden");
    cardShareEl.classList.remove("visually-hidden");
    isShareOpen = true;
  } else {
    cardShareDesktopEl.classList.toggle("visually-hidden");
  }
});

btnShare.addEventListener("click", function () {
  if (window.innerWidth <= 780 && isShareOpen) {
    cardProfileEl.classList.remove("visually-hidden");
    cardShareEl.classList.add("visually-hidden");
    isShareOpen = false;
  }
});
