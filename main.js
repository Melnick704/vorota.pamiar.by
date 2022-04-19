const openPopUp = document.querySelectorAll('.open-pop-up');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');
const body = document.querySelector('body');
const lockPaddingValue = window.innerWidth - document.querySelector('.wallpaper').offsetWidth + 'px';


[].forEach.call(openPopUp,function(el){
    el.addEventListener('click', function (e) {
        e.preventDefault();
        popUp.classList.add('active');
        const popUpActive = document.querySelector('.pop-up.active');
        if (popUpActive) {
            bodyLock();
        }
    })
});

const scrollBtn = document.querySelector('.btn');
window.onscroll = () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add('btn_show');
  } else if (window.screenY < 400) {
    scrollBtn.classList.remove('btn_show');
  } 
};

scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    bodyUnlock();
})

function bodyLock() {
    body.classList.add('lock');
    body.style.paddingRight=lockPaddingValue;
    scrollBtn.classList.remove('btn_show');
}

function bodyUnlock() {
    body.classList.remove('lock');
    body.style.paddingRight = 0;
    scrollBtn.classList.add('btn_show');
}

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+375 (99) 999-99-99');
im.mask(inputs);

