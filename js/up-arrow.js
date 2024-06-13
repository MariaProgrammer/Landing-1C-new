export const upArrow = () => {
    const footerArrow = document.querySelector('.footer__arrow');
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');
    const work = document.querySelector('.work');
    const about = document.querySelector('.about');
    const configurations = document.querySelector('.configurations');
    const advantages = document.querySelector('.advantages');
    const services = document.querySelector('.services');
    const contacts = document.querySelector('.contacts');
    const footer = document.querySelector('.footer');

    let scrollTop = window.scrollY;
    let footerEnd = hero.offsetHeight /2;

    if (scrollTop >= footerEnd) {
        footerArrow.classList.add('animation');
    } else {
        footerArrow.classList.remove('animation');
    }
}