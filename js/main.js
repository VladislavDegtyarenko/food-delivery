const cartButton = document.querySelector('.cart');
const modal = document.querySelector('.modal')
const exit = document.querySelector('.close')

cartButton.addEventListener('click', function (event) {
   modal.classList.add('isOpen');
});

exit.addEventListener('click', function (event) {
   modal.classList.remove('isOpen');
});

new WOW().init();