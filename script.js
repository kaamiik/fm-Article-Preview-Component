"use strict";

const btnProfile = document.querySelector(".card__profile .btn");
const btnShare = document.querySelector(".card__share--mobile .btn");
const cardProfileEl = document.querySelector(".card__profile");
const cardShareEl = document.querySelector(".card__share--mobile");
const cardShareDesktopEl = document.querySelector(".card__share--desktop");

// Initialize aria-expanded attribute
btnProfile.setAttribute("aria-expanded", "false");
btnShare.setAttribute("aria-expanded", "false");

// let isShareOpen = false;
// let wasButtonClickedOnMobile = false;
// let wasButtonClickedOnDesktop = false;

const defaultState = () => {
  cardProfileEl.classList.remove("visually-hidden");
  cardShareEl.classList.add("visually-hidden");
  cardShareDesktopEl.classList.add("visually-hidden");
  btnProfile.setAttribute("aria-expanded", "false");
  btnShare.setAttribute("aria-expanded", "false");
};

btnProfile.addEventListener("click", function () {
  if (window.innerWidth <= 869) {
    cardProfileEl.classList.add("visually-hidden");
    cardShareEl.classList.remove("visually-hidden");
    btnProfile.setAttribute("aria-expanded", "true");
    // isShareOpen = true;
    // wasButtonClickedOnMobile = true;
  } else {
    cardShareDesktopEl.classList.toggle("visually-hidden");
    let isExpaned = btnProfile.getAttribute("aria-expanded") === "true";
    btnProfile.setAttribute("aria-expanded", !isExpaned);
    // wasButtonClickedOnDesktop = true;
  }
});

btnShare.addEventListener("click", function () {
  if (
    window.innerWidth <= 869 &&
    btnProfile.getAttribute("aria-expanded") === "true"
  ) {
    cardProfileEl.classList.remove("visually-hidden");
    cardShareEl.classList.add("visually-hidden");
    btnProfile.setAttribute("aria-expanded", "false");
    // isShareOpen = false;
    // wasButtonClickedOnMobile = false;
  }
});

window.addEventListener("resize", function () {
  if (
    window.innerWidth <= 860 &&
    btnProfile.getAttribute("aria-expanded") === "true"
  ) {
    // Reset to default state for mobile view
    defaultState();
    // wasButtonClickedOnDesktop = false;
  } else if (
    window.innerWidth > 869 &&
    btnProfile.getAttribute("aria-expanded") === "true"
  ) {
    // Reset to default state for desktop view
    defaultState();
    // wasButtonClickedOnMobile = false;
  }
});
