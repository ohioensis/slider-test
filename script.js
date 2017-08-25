'use strict';

var slide1 = document.getElementById('slide1');


slide1.addEventListener('click', function() {
	slide1.classList.add('pointer-show');
	slide2.classList.remove('pointer-show');
	slide3.classList.remove('pointer-show');
	slide4.classList.remove('pointer-show');
});



var slide2 = document.getElementById('slide2');


slide2.addEventListener('click', function() {
	slide2.classList.add('pointer-show');
	slide1.classList.remove('pointer-show');
	slide3.classList.remove('pointer-show');
	slide4.classList.remove('pointer-show');

});

var slide3 = document.getElementById('slide3');


slide3.addEventListener('click', function() {
	slide3.classList.add('pointer-show');
	slide2.classList.remove('pointer-show');
	slide1.classList.remove('pointer-show');
	slide4.classList.remove('pointer-show');
});

var slide4 = document.getElementById('slide4');


slide4.addEventListener('click', function() {
	slide4.classList.add('pointer-show');
	slide3.classList.remove('pointer-show');
	slide2.classList.remove('pointer-show');
	slide1.classList.remove('pointer-show');
});