(() => {
  const refs = {
    openMenuBtn: document.querySelector(".btnmenu-open"),
    closeMenuBtn: document.querySelector(".btnmenu-close"),
    menu: document.querySelector(".mobmenu"),
        // робимо шоб не скролилося знизу тіло
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
        // робимо шоб не скролилося знизу тіло
    refs.body.classList.toggle("no-scroll");
  }
})();