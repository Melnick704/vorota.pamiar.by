const openPopUp = document.getElementById('open-pop-up');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');
const body = document.querySelector('body');
const lockPaddingValue = window.innerWidth - document.querySelector('.wallpaper').offsetWidth + 'px';

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    const popUpActive = document.querySelector('.pop-up.active');
    if (popUpActive) {
        bodyLock();
    }
    
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    bodyUnlock();
})

function bodyLock() {
    body.classList.add('lock');
    body.style.paddingRight=lockPaddingValue;
}

function bodyUnlock() {
    body.classList.remove('lock');
    body.style.paddingRight = 0;
}

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+375 (99) 999-99-99');
im.mask(inputs);
