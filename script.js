// Ejemplo de script para mostrar una alerta cuando se hace clic en un producto
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('¡Estás viendo los detalles de un producto!');
        });
    });
});
