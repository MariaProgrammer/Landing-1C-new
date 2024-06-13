import { smoothScroll } from './smooth-scroll.js';
import { animateHero } from './animate-hero.js';
import { animateCookie } from './animate-cookie.js';
import { disableScroll, enableScroll } from './scroll.js';
import { workAnimation } from './work-animation.js';
import { burgerFixed } from './burger-chageColor.js';
import { upArrow } from './up-arrow.js';
import { navMenu, burgerMenu } from './burger.js';
import { aboutAnimation } from './about-animation.js';
import { configurationsAnimation } from './configurations-animation.js';
import { headerLogoVisible, headerLogoHidden } from './logo-change.js';
import { animateCheck } from './animate-check.js';
import { animateIcon } from './animate-icon.js';


smoothScroll();
burgerMenu();
animateIcon();
animateCheck();  
upArrow();



document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".header__btn");
  const burger = document.getElementById("burger");
  const body = document.body;

  window.setTimeout(animateHero, 0);
  window.setTimeout(animateCookie, 0);

  //срытие скролла 
  burger.addEventListener('click', (e) => {
    if (navMenu.classList.contains('nav--active')) {
      disableScroll();
      e.currentTarget.style.pointerEvents = 'none';
      burger.style.pointerEvents = 'auto';
    } else {
      enableScroll();
      e.currentTarget.style.pointerEvents = 'none';
      burger.style.pointerEvents = 'auto';
    }
  });

  burgerFixed();
  workAnimation();
  aboutAnimation();
  configurationsAnimation();
  headerLogoVisible();
  headerLogoHidden();
  

  window.addEventListener("scroll", () => {
    burgerFixed();
    workAnimation();
    aboutAnimation();
    configurationsAnimation();
    headerLogoHidden();
    aboutAnimation();
    animateIcon();
    animateCheck();
    smoothScroll();
    upArrow();
  });

  window.addEventListener("resize", () => {
    headerLogoVisible();
    aboutAnimation();
  });



  // // Modal window
  // const close = document.querySelector('.close');
  // const modal = document.querySelector('.modal-parent');
  // const menu = document.querySelector('.modal-parent');

  // button.addEventListener("click", showMenu);
  // close.addEventListener('click', hideMenu);

  // let keys = {
  //   ESC: 27,
  // };

  // menu.inert = false;

  // let previousActiveElement;

  // // Modal opened
  // function showMenu() {
  //   modal.classList.add("modal-parent--open");
  //   previousActiveElement = document.activeElement;

  //   Array.from(body.children).forEach((child) => {
  //     if (child !== menu) {
  //       child.inert = true;

  //     }

  //   });
  //   menu.inert = false;

  //   setTimeout(() => {
  //     close.focus();
  //   }, 100);

  //   document.addEventListener('keydown', (e) => {
  //     console.log(e.keyCode);

  //     if (e.keyCode == keys.ESC) {
  //       hideMenu();
  //     }
  //   });
  // }

  // function hideMenu() {
  //   modal.classList.remove("modal-parent--open");

  //   Array.from(body.children).forEach((child) => {
  //     if (child !== menu) {
  //       child.inert = false;
  //     }
  //   });

  //   menu.inert = true;

  //   setTimeout(() => {
  //     previousActiveElement.focus();
  //   }, 100);
  // }

  // // Modal closed
  // modal.querySelector(".modal").addEventListener("click", (e) => {
  //   e._isClick = true;
  // });

  // modal.addEventListener("click", (e) => {
  //   if (e._isClick === true) return;
  //   hideMenu();
  //   // modal.classList.remove("modal-parent--open");
  // });

  // // Modal closed by ESC

  // window.addEventListener("keydown", (e) => {
  //   if (e.key === "Escape") {
  //     hideMenu();
  //     // modal.classList.remove("modal-parent--open");
  //   }
  // });

  // //очистить форму
  // const inputs = document.querySelectorAll('.input-focus');
  // const inputInFocus = () => {
  //   inputs.forEach(input => {
  //     input.addEventListener('focusin', (e) => {

  //       let inputTarget = e.currentTarget;

  //       inputTarget.classList.add('active');
  //     });
  //   });
  // }
  // const inputOutFocus = () => {
  //   inputs.forEach(input => {
  //     input.addEventListener('focusout', (e) => {

  //       let inputOutTarget = e.currentTarget;


  //       inputOutTarget.classList.remove('active');
  //     });
  //   });

  // }

  // inputOutFocus();
  // inputInFocus();

})





