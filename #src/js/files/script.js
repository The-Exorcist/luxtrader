const userIcon = document.querySelector('.user-header__icon');
const menu = document.querySelector('.user-header__menu');

userIcon.addEventListener("click", function (e) {
	menu.classList.toggle('_active');
});

document.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {
		menu.classList.remove('_active');
	}
});