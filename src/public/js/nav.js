const btn_mobile = document.querySelector("#side-menu-toggle");

const nav = document.querySelector("#nav");

const btn = document.querySelector(".material-symbols-outlined");
function listenToClick() {
  nav.classList.toggle("active");
  return changeBurger();
}
function changeBurger() {
  if (nav.classList.contains("active")) {
    btn.innerHTML = "close";
  } else btn.innerHTML = "menu";
}
console.log(nav.classList.contains("active"));
btn_mobile.addEventListener("click", listenToClick);
