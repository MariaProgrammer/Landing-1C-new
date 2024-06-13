export const animateCookie = () => {
    const cookie = document.querySelector(".popup__container");

    const cookieVisible = () => {

      cookie.classList.add('animation');
    }
    window.setTimeout(cookieVisible, 8000);
  }