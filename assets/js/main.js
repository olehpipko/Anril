let navItems = document.querySelectorAll('.header__nav-item'),

	headerBar = document.querySelector('.header__bar'),

	servicesBtns = document.querySelectorAll('.services__nav-item'),
	servicesItems = document.querySelectorAll('.services__item'),

	bannerBtn = document.querySelector('.banner__btn'),
	bannerForm = document.querySelector('.banner__form'),
	bannerContent = document.querySelector('.banner__content'),

	conditionsItem = document.querySelectorAll('.conditions__item'),
	portfolioItem = document.querySelectorAll('.portfolio__item'),

	headerNav = document.querySelector('.header__nav'),
	headerNavBtn = document.querySelector('.header__nav-btn'),

	headerNavHaveMegaMenu = document.querySelectorAll('.header__nav-item--have-megamenu');

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
	if ( document.documentElement.cientWidth > 1140 ) {
		if( pageYOffset >= 66) {
			headerBar.classList.add('header__bar--fixed');
		} else {
			headerBar.classList.remove('header__bar--fixed');
		}
	} else {
		if( pageYOffset >= 180) {
			headerBar.classList.add('header__bar--fixed');
		} else {
			headerBar.classList.remove('header__bar--fixed');
		}
	}
});

if ( document.documentElement.clientWidth < 992 ) {
	for(let i = 0; i < conditionsItem.length; i++) {
		conditionsItem[i].onclick = function () {
			this.classList.add('conditions__item--current');
		}
	}

	for(let i = 0; i < portfolioItem.length; i++) {
		portfolioItem[i].onclick = function () {
			this.classList.add('portfolio__item--current');
		}
	}
}

headerNavBtn.onclick = function () {
	if ( this.classList.contains('header__nav-btn--close') ) {
		this.classList.remove('header__nav-btn--close');
		headerNav.classList.remove('header__nav--active');
	} else {
		this.classList.add('header__nav-btn--close');
		headerNav.classList.add('header__nav--active');
	}
}

for (let i = headerNavHaveMegaMenu.length - 1; i >= 0; i--) {
	arrowButton = document.createElement('button');
	arrowButton.classList.add('header__subnav-open');
	headerNavHaveMegaMenu[i].append(arrowButton);
	arrowButton.onclick = function() {

		megaMenu = this.previousElementSibling;
		btn = this;

		if ( megaMenu.classList.contains('header__megamenu--active') ) {
			megaMenu.classList.remove('header__megamenu--active');
			btn.classList.remove('header__subnav-close');
		} else {
			megaMenu.classList.add('header__megamenu--active');
			btn.classList.add('header__subnav-close');
		}
	}
}