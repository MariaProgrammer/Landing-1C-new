const headerLogoVisible = () => {

  const header = document.querySelector(".header");
  const headerLogo = document.querySelector('.logo__img-hidden');

    if (header.offsetWidth < 450) {
      headerLogo.classList.add('visible');
    } else {
      headerLogo.classList.remove('visible');
    }

  }
  const headerLogoHidden = () => {
    const header = document.querySelector(".header");
  const headerLogo = document.querySelector('.logo__img-hidden');
    if (header.offsetWidth <= 450) {
      let scrollTop = window.scrollY;
      let scrollHeader = header.offsetHeight;
      if (scrollTop >= scrollHeader) {
        headerLogo.style.opacity = "0";
      } else {
        headerLogo.style.opacity = "1";
      }
    }
  }

  export {headerLogoVisible, headerLogoHidden};