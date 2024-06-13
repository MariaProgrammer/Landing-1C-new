export const configurationsAnimation = () => {
    const hero = document.querySelector(".hero");
    const about = document.querySelector(".about");
const work = document.querySelector(".work");
const configurationsTitle = document.querySelector('.configurations__title');
const configurationsDescr = document.querySelector('.configurations__descr');
    let scrollTop = window.scrollY;
    let configurationPos = hero.offsetHeight + work.offsetHeight + about.offsetHeight / 2;

    if (scrollTop >= configurationPos) {
      configurationsTitle.classList.add("animation");
      configurationsDescr.classList.add("animation");
    } else {
      configurationsTitle.classList.remove("animation");
      configurationsDescr.classList.remove("animation");

    }
  };