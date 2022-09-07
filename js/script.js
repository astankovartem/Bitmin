"use strict"

document.addEventListener('DOMContentLoaded', () => {
	const intro = document.querySelector('.intro');
	const header = document.querySelector('.header');
    const scrollItems = document.querySelectorAll('.element-animation');
    
    const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 1.2) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('_active');
			} else {
				el.classList.remove('_active');
			}
		});
	};

    const headerFixed = () => {
		let scrollTop = window.scrollY;
		let introCenter = intro.offsetHeight / 3;
        console.log(introCenter);

		if (scrollTop >= introCenter) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	};
    headerFixed();
	setTimeout(scrollAnimation, 100);
	window.addEventListener('scroll', () => {
		headerFixed();
		scrollAnimation();
	});

	let burger = document.querySelector(".burger");
	let burger_icon = document.querySelector(".burger_window");
	let burger_line = document.querySelectorAll(".burger_line");
	burger.addEventListener("click", menuFunction);


	function menuFunction(e){
		burger_icon.classList.toggle('active');
		for (let i of burger_line){
			i.classList.toggle('active');
		}
	}

});
