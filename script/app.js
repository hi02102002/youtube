"use strict";
//show hide sidebar
const toggleBtn = document.querySelector(".header__toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__link");
const content = document.querySelector(".content");
const tag = document.querySelector(".tag");
window.addEventListener("load", function () {
   content.style.marginLeft = `${sidebar.getBoundingClientRect().width}px`;
});

toggleBtn.addEventListener("click", function (e) {
   sidebar.classList.toggle("hidden");
   content.style.marginLeft = `${sidebar.getBoundingClientRect().width}px`;
});
// nav link//

sidebarLinks.forEach((link) => {
   link.addEventListener("click", function (e) {
      e.preventDefault();
      sidebarLinks.forEach((l) => {
         l.classList.remove("active");
      });

      link.classList.add("active");
   });
});
