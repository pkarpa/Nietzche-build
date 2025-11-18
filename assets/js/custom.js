  const burgerBtn = document.querySelector("#btn-burger");
  const mobileContainer = document.querySelector("#burger-menu")
  const prevUse = document.querySelector("#use-prev");
  const nextUse = document.querySelector("#use-next");
  const navNextBtn = document.querySelector("#nav-next-btn");
  const navPrevBtn = document.querySelector("#nav-prev-btn");
  

  burgerBtn.addEventListener("click", ()=>{
    burgerBtn.classList.toggle("active")
    mobileContainer.classList.toggle("show")
  });

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  speed: 800,
  initialSlide: 1,
  centeredSlides: true,
  spaceBetween: 32,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


navPrevBtn.addEventListener('mouseover', () => {
  prevUse.setAttribute('href', '#arrow-white');
  navPrevBtn.style.transform='rotate(180deg)'
});

navPrevBtn.addEventListener('mouseout', () => {
  prevUse.setAttribute('href', '#arrow-black');
  navPrevBtn.style.transform='rotate(360deg)'
});

navNextBtn.addEventListener('mouseover', () => {
  nextUse.setAttribute('href', '#arrow-white');
  navNextBtn.style.transform='rotate(360deg)'
});

navNextBtn.addEventListener('mouseout', () => {
  nextUse.setAttribute('href', '#arrow-black');
  navNextBtn.style.transform='rotate(180deg)';
});