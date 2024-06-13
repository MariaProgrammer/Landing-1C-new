export const workAnimation = () => {
    const workTitle = document.querySelector(".work__title");
    const workCard = document.querySelectorAll(".work__card");
    const hero = document.querySelector(".hero");

    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;
    if (scrollTop >= heroCenter) {
        workTitle.classList.add("animation");
        workCard.forEach((item) => item.classList.add("animation"));
    } else {
        workTitle.classList.remove("animation");
        workCard.forEach((item) => item.classList.remove("animation"));
    }
};