// Modal window
const close = document.querySelector('.close');
const modal = document.querySelector('.modal-parent');
const menu = document.querySelector('.modal-parent');
const button = document.querySelector(".header__btn");
const body = document.body;

button.addEventListener("click", showMenu);
close.addEventListener('click', hideMenu);

let keys = {
  ESC: 27,
};

menu.inert = false;

let previousActiveElement;

// Modal opened
function showMenu() {
  modal.classList.add("modal-parent--open");
  previousActiveElement = document.activeElement;

  Array.from(body.children).forEach((child) => {
    if (child !== menu) {
      child.inert = true;

    }

  });
  menu.inert = false;

  setTimeout(() => {
    close.focus();
  }, 100);

  document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);

    if (e.keyCode == keys.ESC) {
      hideMenu();
    }
  });
}

function hideMenu() {
  modal.classList.remove("modal-parent--open");

  Array.from(body.children).forEach((child) => {
    if (child !== menu) {
      child.inert = false;
    }
  });

  menu.inert = true;

  setTimeout(() => {
    previousActiveElement.focus();
  }, 100);
}

// Modal closed
modal.querySelector(".modal").addEventListener("click", (e) => {
  e._isClick = true;
});

modal.addEventListener("click", (e) => {
  if (e._isClick === true) return;
  hideMenu();
  // modal.classList.remove("modal-parent--open");
});

// Modal closed by ESC

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideMenu();
    // modal.classList.remove("modal-parent--open");
  }
});

//очистить форму
const inputs = document.querySelectorAll('.input-focus');
const inputInFocus = () => {
  inputs.forEach(input => {
    input.addEventListener('focusin', (e) => {

      let inputTarget = e.currentTarget;

      inputTarget.classList.add('active');
    });
  });
}
const inputOutFocus = () => {
  inputs.forEach(input => {
    input.addEventListener('focusout', (e) => {

      let inputOutTarget = e.currentTarget;


      inputOutTarget.classList.remove('active');
    });
  });

}

inputOutFocus();
inputInFocus();