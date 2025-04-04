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

btnCerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event){
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


/// Sistema de calificacion 
const estrellas_gato_negro = document.querySelectorAll(".calificaciones-gato-negro .estrellas .estrella");
const estrellas_gato_amarillo = document.querySelectorAll(".calificaciones-gato-amarillo .estrellas .estrella");
const estrellas_gato_rayado = document.querySelectorAll(".calificaciones-gato-rayado .estrellas .estrella");

estrellas_gato_negro.forEach(estrella => {
    estrella.addEventListener("click", function() {
        console.log('Click en estrella del gato negro');
    })
});
// esto es lo mismo que hacer esto otro

// estrellas_gato_negro.forEach(llamarFuncion);

// function llamarFuncion(estrella) {
    
// }

/***
 *  ===================== TAREA ================
 *  Completar para los otros gatos y ver como puedo cambiar el color de la estrella
 */
