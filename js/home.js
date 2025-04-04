const imageCache = new Map(); // Crear un almacén temporal de imágenes

function loadImage(url) {
    if (imageCache.has(url)) {
        console.log('Imagen ya cargada en caché');
    } else {
        const img = new Image();
        img.src = url;
        imageCache.set(url, img); // Guardar la imagen en la caché
    }
}

const images = document.querySelectorAll(".card img");
const modal = document.getElementById("imagen-modal");
const modalImage = document.getElementById("modal-img");
const btnCerrar = document.getElementById("btn-cerrar");

images.forEach(preloadImg);

function preloadImg(img) {
    loadImage(img.src); // Cargar la imagen en la memoria temporal
}

function configurarImage(event) {
    modalImage.src = event.target.src; // Tomar la imagen desde el evento click
    modal.style.display = "flex";
}

images.forEach(img => {
    img.addEventListener("click", configurarImage); // Agregar el evento correctamente
});

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

// Fin