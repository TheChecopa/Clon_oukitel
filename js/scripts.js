let scrollStep = 150; // Cambia esto según sea necesario para ajustar la cantidad de desplazamiento por cada clic
let scrollContainer = document.querySelector('.image-gallery');
let currentIndex = 0;
const images = document.querySelectorAll('.image-gallery img');

function scrollGallery(direction) {
    let scrollAmount = scrollStep * direction;
    scrollContainer.scrollLeft += scrollAmount;
}

function showImage(index) {
    let scrollAmount = images[index].offsetLeft - (scrollContainer.offsetWidth - images[index].offsetWidth) / 2;
    scrollContainer.scrollLeft = scrollAmount;
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

showImage(currentIndex);


function mostrarImagen(src) {
    var imagenPrincipal = document.getElementById('imagenPrincipal');
    var img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagen Principal';
    imagenPrincipal.innerHTML = ''; // Limpiar la imagen principal anterior
    imagenPrincipal.appendChild(img);
}




document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.accordion-input');

    tabs.forEach(function(tab) {
        tab.addEventListener('change', function() {
            if (this.checked) {
                // Si este tab está siendo abierto, cerrar el otro tab si está abierto
                closeOtherTabs(this);
            }
        });
    });

    function closeOtherTabs(currentTab) {
        tabs.forEach(function(tab) {
            if (tab !== currentTab && tab.checked) {
                tab.checked = false;
            }
        });
    }
});
