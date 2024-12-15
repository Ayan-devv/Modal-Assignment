function modalBtn() {
    const modal = document.querySelector(".modalParent");
    modal.classList.add("visible");
}

function modalClose() {
    const modal = document.querySelector(".modalParent");
    modal.classList.remove("visible");
}