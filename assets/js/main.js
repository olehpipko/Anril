let navItems = document.querySelectorAll('.header__nav-item'),
	servicesBtns = document.querySelectorAll('.services__nav-item'),
	servicesItems = document.querySelectorAll('.services__item');



for (let i = servicesBtns.length - 1; i >= 0; i--) {
	servicesBtns[i].onclick = function () {

		for (let j = servicesBtns.length - 1; j >= 0; j--) {
			servicesBtns[j].classList.remove('services__nav-item--current');
			servicesItems[j].classList.remove('services__item--current');
		}

		servicesBtns[i].classList.add('services__nav-item--current');
		servicesItems[i].classList.add('services__item--current');
		
		console.log(this);

	}
}