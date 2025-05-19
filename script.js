// Elementos clave del DOM
const navUser = document.getElementById("nav-user"); // En la navbar, donde sale el icono y nombre de usuario
const mobileSidebar = document.getElementById("mobile-sidebar"); // La sidebar del telefono 
const overlay = document.getElementById("overlay"); // Fondo oscuro sobre el foro en el telefono
const vw = window.innerWidth; // Tamaño de la pantalla del navegador (en píxeles)

/**
 * Maneja el clic sobre el usuario en la navbar.
 * Solo muestra la sidebar si el ancho de pantalla es menor a 768px (modo móvil).
 */
function handleNavUserClick() {
    if (vw < 768) showSidebar();
}

/**
 * Muestra la sidebar móvil si no está ya activa.
 * También activa el overlay y bloquea el scroll del cuerpo.
 */
function showSidebar() {
    if (!mobileSidebar.classList.contains('active')) {
        console.log("Show Sidebar"); // TODO: Remove console.log
        mobileSidebar.classList.add('active');
        overlay.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }
}

/**
 * Oculta la sidebar móvil si está activa.
 * También oculta el overlay y reestablece el scroll del cuerpo.
 */
function hideSidebar() {
    if (mobileSidebar.classList.contains('active')) {
        console.log("Hide Sidebar"); // TODO: Remove console.log
        mobileSidebar.classList.remove('active');
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}