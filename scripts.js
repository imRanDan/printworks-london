let open = document.querySelector(".open-btn")

let close = document.querySelector(".close-btn")

open.addEventListener("click", () => {
  document.querySelector(".side-nav").style.width = "100%";
})

close.addEventListener("click", () => {
  document.querySelector('.side-nav').style.width = "0%";
})