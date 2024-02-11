let accordion = $('.accordion');

for (let i = 0; i < accordion.length; i++){
  accordion[i].addEventListener("click", function(){
    this.classList.toggle('active');

    let panel = this.nextElementSibling;
    
    if (panel.style.display === 'block'){
      panel.style.display = 'none';
    } 
    else{
      panel.style.display = 'block';
    }
  });
};


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});