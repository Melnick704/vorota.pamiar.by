var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.16,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
  });

  let coll = document.querySelector('.collapsible'),
  con = document.querySelector('.content');
  coll.addEventListener('click', function () {
    coll.classList.toggle('active');
      if (con.style.maxHeight == 0) {
        con.style.maxHeight = con.scrollHeight + 'px';
      } else  
          if (con.style.maxHeight = con.scrollHeight + 'px') {
            con.style.maxHeight = null;
      }
    })


 
