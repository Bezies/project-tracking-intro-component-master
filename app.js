const hamburgerOpen = document.querySelector(".open");
const hamburgerClose = document.querySelector(".close");
const menu = document.querySelector(".box");


// OPEN MENU 

hamburgerOpen.addEventListener("click", () => {
    menu.classList.replace("box", "box-on");
    hamburgerOpen.classList.replace("open", "open-off");
    hamburgerClose.classList.replace("close", "close-on");
})

hamburgerClose.addEventListener("click", () => {
    menu.classList.replace("box-on", "box");
    hamburgerClose.classList.replace("close-on", "close");
    hamburgerOpen.classList.replace("open-off", "open")
})