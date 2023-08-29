// Obtener el elemento del balón y establecer su posición inicial
const ball = document.getElementById("ball");
let ballPosition = 0; // Posición inicial en píxeles

// Función para mover el balón de izquierda a derecha
function moveBall() {
    ballPosition += 5; // Incremento de posición
    ball.style.left = ballPosition + "px";

    // Si el balón llega al final del contenedor, reiniciar posición
    const containerWidth = document.getElementById("clubes").offsetWidth;
    if (ballPosition > containerWidth) {
        ballPosition = 0;
    }

    // Continuar moviendo el balón en la siguiente animación
    requestAnimationFrame(moveBall);
}

// Iniciar la animación del balón al cargar la página
moveBall();

// Obtener todas las imágenes de los clubes
const clubImages = document.querySelectorAll(".club-images");

// Agregar el evento "mouseover" a cada imagen para activar el efecto de acercamiento
clubImages.forEach(image => {
    image.addEventListener("mouseover", () => {
        // Aplicar efecto de acercamiento solo a la imagen actual
        image.style.transform = "scale(1.1)"; // Ajusta la escala según tus preferencias
    });

    // Agregar el evento "mouseout" para restablecer la escala original
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});

