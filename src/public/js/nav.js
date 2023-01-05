const btn_mobile = document.querySelector("#side-menu-toggle");

btn_mobile.addEventListener("click", () => {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
});
