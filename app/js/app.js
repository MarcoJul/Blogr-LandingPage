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

const productBtn = document.querySelector(`.product_btn`);
const companyBtn = document.querySelector(`.company_btn`);
const connectBtn = document.querySelector(`.connect_btn`);

const productChv = document.querySelectorAll(".chevron_product");
const companyChv = document.querySelectorAll(".chevron_company");
const connectChv = document.querySelectorAll(".chevron_connect");

const toggleVisibility = (dropdown) => {
  dropdown.classList.toggle("dropdown_visibility");
};

const removeVisibility = (dropdown) => {
  dropdown.classList.remove("dropdown_visibility");
};
const rotateChevron = (chevronGroup) => {
  chevronGroup.forEach((chevron) => {
    chevron.classList.toggle("chevron_rotation");
  });
};

const resetChevron = (chevronGroup) => {
  chevronGroup.forEach((chevron) => {
    chevron.classList.remove("chevron_rotation");
  });
};

productBtn.addEventListener("click", () => {
  toggleVisibility(productDrop);
  rotateChevron(productChv);

  resetChevron(companyChv);
  resetChevron(connectChv);

  dropArray.forEach((drop) => {
    if (drop !== productDrop) {
      removeVisibility(drop);
    }
  });
});

companyBtn.addEventListener("click", () => {
  toggleVisibility(companyDrop);
  rotateChevron(companyChv);

  resetChevron(productChv);
  resetChevron(connectChv);

  dropArray.forEach((drop) => {
    if (drop !== companyDrop) {
      removeVisibility(drop);
    }
  });
});

connectBtn.addEventListener("click", () => {
  toggleVisibility(connectDrop);
  rotateChevron(connectChv);

  resetChevron(productChv);
  resetChevron(companyChv);

  dropArray.forEach((drop) => {
    if (drop !== connectDrop) {
      removeVisibility(drop);
    }
  });
});

window.addEventListener("click", (e) => {
  e.stopPropagation();

  if (
    e.target !== companyBtn &&
    e.target !== connectBtn &&
    e.target !== productBtn
  ) {
    dropArray.forEach((drop) => {
      removeVisibility(drop);
    });
    resetChevron(companyChv);
    resetChevron(productChv);
    resetChevron(connectChv);
  }
});

// const toggleVisibility = (dropdown) => {
//   dropdown.classList.toggle("dropdown_visibility");
// };

// window.addEventListener("click", (e) => {
//   if (!e.target.parentElement) return;
//   console.log(e.target.classList.value);
//   console.log(e.target.parentElement.classList.value.includes("company_btn"));
//   if (
//     e.target.parentElement.classList.value.includes("product_btn") ||
//     e.target.classList.value.includes("product_btn")
//   ) {
//     removeVisibility(companyDrop);
//     removeVisibility(connectDrop);
//     toggleVisibility(productDrop);
//   } else if (e.target.parentElement.classList.value.includes("company_btn")) {
//     removeVisibility(productDrop);
//     removeVisibility(connectDrop);
//     toggleVisibility(companyDrop);
//   } else if (e.target.parentElement.classList.value.includes("connect_btn")) {
//     removeVisibility(productDrop);
//     removeVisibility(companyDrop);
//     toggleVisibility(connectDrop);
//   } else {
//     removeVisibility();
//   }
// });
