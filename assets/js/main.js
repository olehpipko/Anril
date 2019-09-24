let navItems = document.querySelectorAll('.header__nav-item'),

	headerBar = document.querySelector('.header__bar'),

	servicesBtns = document.querySelectorAll('.services__nav-item'),
	servicesItems = document.querySelectorAll('.services__item'),

	bannerBtn = document.querySelector('.banner__btn'),
	bannerForm = document.querySelector('.banner__form'),
	bannerContent = document.querySelector('.banner__content');

for (let i = servicesBtns.length - 1; i >= 0; i--) {
	servicesBtns[i].onclick = function () {

		for (let j = servicesBtns.length - 1; j >= 0; j--) {
			servicesBtns[j].classList.remove('services__nav-item--current');
			servicesItems[j].classList.remove('services__item--current');
		}

		servicesBtns[i].classList.add('services__nav-item--current');
		servicesItems[i].classList.add('services__item--current');

	}
}

bannerBtn.onclick = function() {
	bannerForm.classList.remove('banner__form--hide');
	bannerContent.classList.remove('banner__content--current');
}

window.addEventListener('scroll', function() {
	if( pageYOffset >= 66) {
		headerBar.classList.add('header__bar--fixed');
	} else {
		headerBar.classList.remove('header__bar--fixed');
	}
});