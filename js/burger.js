export const navMenu = document.querySelector(".nav");
export const navLink = document.querySelectorAll(".header__navLink");

export const burgerMenu = () => {
    burger.addEventListener("click", () => {

      navMenu.classList.toggle("nav--active");
      burger.classList.toggle("burger--active");
      document.body.classList.toggle("stop-scroll");
    });
    
    navLink.forEach((item) => {
      item.addEventListener("click", (e) => {
        let href = e.currentTarget;
        navMenu.classList.remove("nav--active");
        burger.classList.remove("burger--active");
        document.body.classList.remove("stop-scroll");
        document.body.classList.remove("disable-scroll");
        location.href = href;
      });
    });
  }

  