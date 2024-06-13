export const animateCheck = () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  const about = document.querySelector(".about");
  const work = document.querySelector(".work");
  const advantages = document.querySelector('.advantages');
  const configurations = document.querySelector('.configurations');

  let scrollTop = window.scrollY;
  let currentPos = hero.offsetHeight + work.offsetHeight + about.offsetHeight + advantages.offsetHeight + configurations.offsetHeight + header.offsetHeight;


  if (scrollTop > currentPos) {
    const servicesItems = document.querySelectorAll('.services__content-item');
    let data = `<span class="wrap wrapper--check" >
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none" 
				 stroke="red"  stroke-width="3" stroke-dasharray="100">
			<path id="check" d="M 12,22 L 22,31 L 36,13" 
						stroke-dashoffset="0">
				<animate attributeName="stroke-dashoffset" 
								 from="100" to="0" repeatCount="indefinite" dur="3s"></animate>
			</path>
		</svg>
		</span>`;

    Array.from(servicesItems).forEach(item => item.insertAdjacentHTML('afterbegin', data));
  } 
  }
