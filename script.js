"use strict";

const panel = document.querySelectorAll(".panel");

for (let i of panel) {
  i.addEventListener("click", () => {
    for (let i of panel) {
      i.classList.remove("active");
    }
    i.classList.add("active");
  });
}
