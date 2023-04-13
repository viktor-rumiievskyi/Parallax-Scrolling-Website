const control = document.getElementById('direction-toggle');
const wrapper = document.querySelector('.wrapper');
const marquees = document.querySelectorAll('.marquee')

control.addEventListener('click', () => {
	control.classList.toggle('toggle-vertical');
	wrapper.classList.toggle('wrapper-vertical');
	[...marquees].forEach(marquee => {
		marquee.classList.toggle('marquee-vertical')
	})
})