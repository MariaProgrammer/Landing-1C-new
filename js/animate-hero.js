export const animateHero = () => {
    const linie = document.querySelector(".header__line");
    const lines = document.querySelectorAll(".hero__line");
    const button = document.querySelector(".header__btn");
    const nav = document.querySelector(".header__navList");
    const mainTitle = document.querySelector(".hero__title");
    const descr = document.querySelector(".hero__descr");

    nav.classList.add("animation");
    mainTitle.classList.add("animation");
    descr.classList.add("animation");
    linie.classList.add("animation");

    lines.forEach((item) => item.classList.add("animation"));

    const stopAnimate__button = () => {
      button.classList.remove("animation");
    };

    const animate__button = () => {
      button.classList.add("animation");
      window.setTimeout(stopAnimate__button, 500);
    };

    window.setTimeout(animate__button, 7000);
  };