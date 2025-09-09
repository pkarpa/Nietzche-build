  const burgerBtn = document.querySelector("#btn-burger");
  const mobileContainer = document.querySelector("#burger-menu")

  burgerBtn.addEventListener("click", ()=>{
    burgerBtn.classList.toggle("active")
    mobileContainer.classList.toggle("show")
  });