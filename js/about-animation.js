export const aboutAnimation = () => {
    const work = document.querySelector(".work");
    const hero = document.querySelector(".hero");
    const header = document.querySelector(".header");
    const aboutImg = document.querySelector(".about__img");
    const aboutDescr = document.querySelector(".about__descr");
    const aboutTitle = document.querySelector(".about__title");
    const text = document.querySelectorAll(".about__text-par");
    let scrollTop = window.scrollY;
    let workPos = hero.offsetHeight + (work.offsetHeight - header.offsetHeight);
    let aboutCenter = hero.offsetHeight + work.offsetHeight;
    let aboutCenter450 = hero.offsetHeight + work.offsetHeight / 2;

    if (scrollTop >= workPos) {
        aboutImg.classList.add("animation");
    } else {
        aboutImg.classList.remove("animation");
    }

    if (header.offsetWidth < 650) {
        if (scrollTop >= aboutCenter450) {
            aboutDescr.classList.add("animation");
            aboutTitle.classList.add("animation");
            text.forEach(item => item.classList.add('animation'));
        } else {
            aboutDescr.classList.remove("animation");
            aboutTitle.classList.remove("animation");
            text.forEach(item => item.classList.remove('animation'));
        }
    } else {
        if (scrollTop >= aboutCenter) {
            aboutDescr.classList.add("animation");
            aboutTitle.classList.add("animation");
            text.forEach(item => item.classList.add('animation'));
        } else {
            aboutDescr.classList.remove("animation");
            aboutTitle.classList.remove("animation");
            text.forEach(item => item.classList.remove('animation'));
        }
    }
}