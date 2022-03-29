"use strict";

//// HAMBURGER MENU

const companyNav = document.querySelector(".nav-company");
const hamburger = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("click");
  mobileNav.classList.toggle("navTranslate");
});

//// DROPDOWN MENU DESKTOP

const productDrop = document.querySelector(`.product_dropdown`);
const companyDrop = document.querySelector(`.company_dropdown`);
const connectDrop = document.querySelector(`.connect_dropdown`);

const dropArray = [companyDrop, productDrop, connectDrop];

const productBtn = document.querySelector(`#product`);
const companyBtn = document.querySelector(`#company`);
const connectBtn = document.querySelector(`#connect`);

const removeVisibility = () => {
  dropArray.forEach((dropdown) =>
    dropdown.classList.remove("dropdown_visibility")
  );
};

const toggleVisibility = (dropdown) => {
  dropdown.classList.toggle("dropdown_visibility");
};

window.addEventListener("click", () => {
  if (event.target.parentElement.id === "product") {
    removeVisibility();
    toggleVisibility(productDrop);
  } else if (event.target.parentElement.id === "company") {
    removeVisibility();
    toggleVisibility(companyDrop);
  } else if (event.target.parentElement.id === "connect") {
    removeVisibility();
    toggleVisibility(connectDrop);
  } else {
    removeVisibility();
  }
});
