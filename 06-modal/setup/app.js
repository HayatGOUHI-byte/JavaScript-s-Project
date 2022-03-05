const btnOpenModal = document.querySelector(".modal-btn");/**open modal */
const modal =document.querySelector(".modal-overlay");/**modal content */
const closeBtn = document.querySelector(".close-btn");/**close Button */


btnOpenModal.addEventListener("click", () => {
    modal.classList.add("open-modal");
})

closeBtn.addEventListener("click",() => {
   modal.classList.remove("open-modal");
})