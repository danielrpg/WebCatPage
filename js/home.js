const imageCache = new Map(); // Crear un almacen temporal de imagenes

function loadImage(url) {
    if (imageCache.has(url)) {
        console.log('si tiene a la image');
    } else {
        const img = new Image();
        img.src = url;
        imageCache.set(url, img); // Guardar la imagen en el cache
        //console.log(imageCache);
    }
}

const images = document.querySelectorAll(".card img");
const modal = document.getElementById("imagen-modal");
const modalImage = document.getElementById("modal-img");
const btnCerrar = document.getElementById("btn-cerrar");
/**
 * forEach sirve para iterar 
 * 1,2,3,4,............,100
 * for (let i = 1; i <= 100; i++){
 *     console.log(i);
 * }
 * 
 * 
 * 
 */

/**
 * ============== TAREA =================================
 * Corregir el error que esta ocurriendo aqui
 * no esta funcionando el Click, necesitamos corregir ese error
 */

images.forEach(preloadImg);

function preloadImg(img) {
    loadImage(img.src); // Mandamos a cargar a la memoria temporal
    imageCache.forEach(configurarImage);
}

function configurarImage(img) {
    modalImage.src = img.src;
    modal.style.display = "flex";
}

images.forEach(abrirModal);

function abrirModal(img) {
    img.addEventListener("click", configurarImage(img));
}

// images[0].addEventListener("click", function() {
//     modal.style.display = "flex";
//     modalImage.src = this.src;
// });

// images[1].addEventListener("click", function() {
//     modal.style.display = "flex";
//     modalImage.src = this.src;
// });

// images[2].addEventListener("click", function() {
//     modal.style.display = "flex";
//     modalImage.src = this.src;
// });

btnCerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event){
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Fin