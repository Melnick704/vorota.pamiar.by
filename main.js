const openPopUp = document.getElementById('open-pop-up');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    const popUpActive = document.querySelector('.pop-up.active');
    if (popUpActive) {
        document.body.style.overflowY = "hidden";
    }
    
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.style.overflowY = "visible";
})

