//изменение цвета бургер меню при прокрутке
export const burgerFixed = () => {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".header");
  const burger = document.getElementById("burger");
  const burger__container = document.querySelector(".burger__container");
  
  let scrollTop = window.scrollY;
  let heroEnd = hero.offsetHeight - header.offsetHeight;
  if (scrollTop >= heroEnd) {
    burger__container.classList.add("absolute");
    burger.classList.add("absolute");
  } else {
    burger__container.classList.remove("absolute");
    burger.classList.remove("absolute");
  }
};