"use strict";

const btnProfile = document.querySelector(".card__profile .btn");
const btnShare = document.querySelector(".card__share--mobile .btn");
const cardProfileEl = document.querySelector(".card__profile");
const cardShareEl = document.querySelector(".card__share--mobile");
const cardShareDesktopEl = document.querySelector(".card__share--desktop");

let isShareOpen = false;
let wasButtonClickedOnMobile = false;
let wasButtonClickedOnDesktop = false;

const defaultState = () => {
  cardProfileEl.classList.remove("visually-hidden");
  cardShareEl.classList.add("visually-hidden");
  cardShareDesktopEl.classList.add("visually-hidden");
};

btnProfile.addEventListener("click", function () {
  if (window.innerWidth <= 780) {
    cardProfileEl.classList.add("visually-hidden");
    cardShareEl.classList.remove("visually-hidden");
    isShareOpen = true;
    wasButtonClickedOnMobile = true;
  } else {
    cardShareDesktopEl.classList.toggle("visually-hidden");
    wasButtonClickedOnDesktop = true;
  }
});

btnShare.addEventListener("click", function () {
  if (window.innerWidth <= 780 && isShareOpen) {
    cardProfileEl.classList.remove("visually-hidden");
    cardShareEl.classList.add("visually-hidden");
    isShareOpen = false;
    wasButtonClickedOnMobile = false;
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth <= 780 && wasButtonClickedOnDesktop) {
    // Reset to default state for mobile view
    defaultState();
    wasButtonClickedOnDesktop = false;
  } else if (window.innerWidth > 780 && wasButtonClickedOnMobile) {
    // Reset to default state for desktop view
    defaultState();
    wasButtonClickedOnMobile = false;
  }
});
