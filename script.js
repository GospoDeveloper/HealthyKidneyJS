"use strict";
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".hidden"); // Select elements to animate
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.add("visible"); // Add the visible class when the element is in view
    }
  });
});

let btnDonations = document.querySelector(".btnDonations");
console.log(btnDonations);

btnDonations.addEventListener("click", (e) => {
  e.preventDefault(e);
  window.location.href = "https://revolut.me/gospodk1gy";
});
