
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-icon');
    
    menuToggle.addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    });
});



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

estrellas_gato_negro.forEach((estrella, indice) => {
    estrella.addEventListener("click", function() {
        // Borrar todo
        estrellas_gato_negro.forEach(estrella => {
            estrella.classList.remove('active');
        });
        //Volviendo a marcar todo hasta la estrella que hemos hecho click
        for (let i = 0; i <= indice; i++) {
            estrellas_gato_negro[i].classList.add('active');
        }

        estrella.classList.add("active");
        const calificacion = indice + 1;
        localStorage.setItem('gatoNegro', calificacion); // se guarda en la base de datos
        console.log(`Calificacion para gato negro: ${calificacion} estrellas`);

    })
});

estrellas_gato_amarillo.forEach((estrella, indice) => {
    estrella.addEventListener("click", function() {
        // Borrar todo
        estrellas_gato_amarillo.forEach(estrella => {
            estrella.classList.remove('active');
        });

        //Volviendo a marcar todo hasta la estrella que hemos hecho click
        for (let i = 0; i <= indice; i++) {
            estrellas_gato_amarillo[i].classList.add('active');
        }
        
        estrella.classList.add("active");
        const calificacion = indice + 1;
        localStorage.setItem('gatoAmarillo', calificacion);
        console.log(`Calificacion para gato amarillo: ${calificacion} estrellas`);
    })
});

estrellas_gato_rayado.forEach((estrella, indice) => {
    estrella.addEventListener("click", function () {
        // Borrar todo
        estrellas_gato_rayado.forEach(estrella => {
            estrella.classList.remove('active');
        });

        // Volver a marcar hasta la estrella clickeada
        for (let i = 0; i <= indice; i++) {
            estrellas_gato_rayado[i].classList.add('active');
        }

        const calificacion = indice + 1;
        localStorage.setItem('gatoRayado', calificacion);
        console.log(`Calificación para gato rayado: ${calificacion} estrellas`);
    });
});
