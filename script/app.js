"use strict";
//show hide sidebar
const toggleBtn = document.querySelector(".header__toggle");
const sidebar = document.querySelector(".sidebar");
toggleBtn.addEventListener("click", function (e) {
   sidebar.classList.toggle("hidden");
});
// nav link//
const sidebarLinks = document.querySelectorAll(".sidebar__link");

sidebarLinks.forEach((link) => {
   link.addEventListener("click", function (e) {
      e.preventDefault();
      sidebarLinks.forEach((l) => {
         l.classList.remove("active");
      });

      link.classList.add("active");
   });
});
//
