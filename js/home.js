document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const submenuParent = document.querySelectorAll('.tiene-submenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // Handle submenu on all devices
    submenuParent.forEach(parent => {
        const parentLink = parent.querySelector('a');
        
        if (parentLink) {
            parentLink.addEventListener('click', function(e) {
                // Check if we're in mobile view
                if (window.innerWidth <= 700) {
                    e.preventDefault();
                    const submenu = parent.querySelector('.submenu');
                    if (submenu) {
                        submenu.classList.toggle('active');
                        // Toggle active class on parent link to change arrow direction
                        this.classList.toggle('active');
                    }
                    
                    // Close other open submenus
                    submenuParent.forEach(otherParent => {
                        if (otherParent !== parent) {
                            const otherSubmenu = otherParent.querySelector('.submenu');
                            const otherParentLink = otherParent.querySelector('a');
                            if (otherSubmenu && otherSubmenu.classList.contains('active')) {
                                otherSubmenu.classList.remove('active');
                                if (otherParentLink) {
                                    otherParentLink.classList.remove('active');
                                }
                            }
                        }
                    });
                }
                // In desktop view, the hover CSS handles it
            });
        }
    });

    // Image Cache System
    const imageCache = new Map(); // Create a temporary image store

    function loadImage(url) {
        if (imageCache.has(url)) {
            console.log('Image already loaded in cache');
        } else {
            const img = new Image();
            img.src = url;
            imageCache.set(url, img); // Save the image in the cache
        }
    }

    // Modal Image System
    const images = document.querySelectorAll(".card img, .imagen-gato img, .imagen-gato-info img");
    const modal = document.getElementById("imagen-modal");
    const modalImage = document.getElementById("modal-img");
    const btnCerrar = document.getElementById("btn-cerrar");

    // Preload all images
    images.forEach(img => {
        loadImage(img.src);
    });

    function configurarImage(event) {
        modalImage.src = event.target.src; // Take the image from the click event
        modal.style.display = "flex"; // Use flex display
        
        // Prevent scrolling on the body when modal is open
        document.body.style.overflow = 'hidden';
        
        // Ensure the modal is centered
        modalImage.style.display = 'block';
        modalImage.style.margin = 'auto';
        
        // Make sure the close button is visible
        if (btnCerrar) {
            btnCerrar.style.display = 'block';
        }
    }

    images.forEach(img => {
        img.addEventListener("click", configurarImage);
        // Add cursor pointer to show it's clickable
        img.style.cursor = 'pointer';
    });

    if (btnCerrar) {
        btnCerrar.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent event bubbling
            modal.style.display = "none";
            // Restore scrolling on the body
            document.body.style.overflow = '';
        });
    }

    if (modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                // Restore scrolling on the body
                document.body.style.overflow = '';
            }
        });
        
        // Also add ESC key to close the modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Button event listeners
    const btnGato = document.getElementById('btn-gato');
    const btnGato2 = document.getElementById('btn-gato2');

    if (btnGato) {
        btnGato.addEventListener('click', function() {
            alert('¡Gracias por tu interés en WebCat!');
        });
    }

    if (btnGato2) {
        btnGato2.addEventListener('click', function() {
            alert('¡Descubre más sobre nuestros gatos!');
        });
    }

    // Cat Rating System
    const estrellas_gato_negro = document.querySelectorAll(".calificaciones-gato-negro .estrellas .estrella");
    const estrellas_gato_amarillo = document.querySelectorAll(".calificaciones-gato-amarillo .estrellas .estrella");
    const estrellas_gato_rayado = document.querySelectorAll(".calificaciones-gato-rayado .estrellas .estrella");

    // Load saved ratings from localStorage
    function loadSavedRatings() {
        const gatoNegroRating = localStorage.getItem('gatoNegro');
        const gatoAmarilloRating = localStorage.getItem('gatoAmarillo');
        const gatoRayadoRating = localStorage.getItem('gatoRayado');

        if (gatoNegroRating) {
            for (let i = 0; i < gatoNegroRating; i++) {
                if (estrellas_gato_negro[i]) {
                    estrellas_gato_negro[i].classList.add('active');
                    estrellas_gato_negro[i].style.color = 'yellow';
                }
            }
        }

        if (gatoAmarilloRating) {
            for (let i = 0; i < gatoAmarilloRating; i++) {
                if (estrellas_gato_amarillo[i]) {
                    estrellas_gato_amarillo[i].classList.add('active');
                    estrellas_gato_amarillo[i].style.color = 'yellow';
                }
            }
        }

        if (gatoRayadoRating) {
            for (let i = 0; i < gatoRayadoRating; i++) {
                if (estrellas_gato_rayado[i]) {
                    estrellas_gato_rayado[i].classList.add('active');
                    estrellas_gato_rayado[i].style.color = 'yellow';
                }
            }
        }
    }

    // Call to load saved ratings
    loadSavedRatings();

    // Apply hover effects and click handlers to black cat stars
    estrellas_gato_negro.forEach((estrella, indice) => {
        // Click event for selecting a rating
        estrella.addEventListener("click", function() {
            // Clear all stars
            estrellas_gato_negro.forEach(estrella => {
                estrella.classList.remove('active');
                estrella.style.color = '#CCC';
            });
            
            // Set stars up to current index as active
            for (let i = 0; i <= indice; i++) {
                estrellas_gato_negro[i].classList.add('active');
                estrellas_gato_negro[i].style.color = 'yellow';
            }

            const calificacion = indice + 1;
            localStorage.setItem('gatoNegro', calificacion); // Save in localStorage
            console.log(`Calificacion para gato negro: ${calificacion} estrellas`);
        });
        
        // Hover effect for stars
        estrella.addEventListener('mouseover', function() {
            // Show visual preview of rating
            estrellas_gato_negro.forEach((s, i) => {
                if (i <= indice) {
                    s.style.color = 'yellow';
                } else {
                    s.style.color = '#CCC';
                }
            });
        });
        
        // Reset appearance when mouse leaves
        estrella.addEventListener('mouseout', function() {
            // Reset to default state or active state
            estrellas_gato_negro.forEach((s) => {
                if (s.classList.contains('active')) {
                    s.style.color = 'yellow';
                } else {
                    s.style.color = '#CCC';
                }
            });
        });
    });
});