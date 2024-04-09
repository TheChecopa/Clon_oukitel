
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});


const contenedorImagen = document.querySelector('.contenedor-imagen');

contenedorImagen.addEventListener('mouseenter', function() {
    const video = this.querySelector('video');
    video.play();
    this.classList.add('video-activo');
});

contenedorImagen.addEventListener('mouseleave', function() {
    const video = this.querySelector('video');
    video.pause();
    video.currentTime = 0;
    this.classList.remove('video-activo');
});


// Contenido de scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.accordion-input');

    inputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked) {
                inputs.forEach(otherInput => {
                    if (otherInput !== this) {
                        otherInput.checked = false;
                    }
                });
            }
        });
    });
});








