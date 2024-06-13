export const animateIcon = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const about = document.querySelector('.about');
  const work = document.querySelector('.work');
  const configurations = document.querySelector('.configurations');  

  const advantagesCardImg = document.querySelectorAll('.advantages__card-img');

    advantagesCardImg.forEach(item => {
      let scrollTop = window.scrollY;
    let advantagesPos = hero.offsetHeight + about.offsetHeight + work.offsetHeight + configurations.offsetHeight + header.offsetHeight;
      if(scrollTop > advantagesPos){
        item.classList.add('animation');
      } else {
        item.classList.remove('animation');
      }
      
    });
  }