const headerElement = document.querySelector('.header');

const callback = function (entries, observer) {
	if (entries[0].isIntersecting) {
		headerElement.classList.remove('_scroll');
	} else {
		headerElement.classList.add('_scroll');
	}
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);


window.onload = function () {
	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		if (isMobile.any()) {
			if (targetElement.classList.contains('contacts-phones__button') 
			|| targetElement.classList.contains('contacts-phones__button-arrow')) {
				targetElement.closest('.contacts__content').classList.toggle('_active');
			}
			if (!targetElement.closest('.contacts-phones') && document.querySelectorAll('.contacts-phones._active').length > 0) {
				_removeClasses(document.querySelectorAll('.contacts-phones._active'), "_active");
			}
		}
	}
}

