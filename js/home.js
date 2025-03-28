
const images = document.querySelectorAll(".card img");
const modal = document.getElementById("imagen-modal");
const modalImage = document.getElementById("modal-img");
const btnCerrar = document.getElementById("btn-cerrar");

images[0].addEventListener("click", function() {
    modal.style.display = "flex";
    modalImage.src = this.src;
});

images[1].addEventListener("click", function() {
    modal.style.display = "flex";
    modalImage.src = this.src;
});

images[2].addEventListener("click", function() {
    modal.style.display = "flex";
    modalImage.src = this.src;
});

btnCerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event){
    if (event.target === modal) {
        modal.style.display = "none";
    }
});