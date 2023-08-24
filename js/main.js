let humbarger = document.querySelector (`.humbarger`)
let navMenu = document.querySelector (`.nav-items`)

humbarger.addEventListener (`click`, () =>{
    navMenu.classList.toggle (`active`)
    humbarger.classList.toggle (`active`)
})