// Elementos clave del DOM
const navUser = document.getElementById("nav-user"); // En la navbar, donde sale el icono y nombre de usuario
const mobileSidebar = document.getElementById("mobile-sidebar"); // La sidebar del telefono
const overlay = document.getElementById("overlay"); // Fondo oscuro sobre el foro en el telefono
const vw = window.innerWidth; // Tamaño de la pantalla del navegador (en píxeles)
const sideLinksDiv = document.getElementById("side-links"); // Links de Navegación en el SideBar
const announLinksDiv = document.getElementById("announ-links"); // Links de Navegación en el Tablón de Anuncios

const sideEventsDiv = document.getElementById("side-events"); // Eventos en el SideBar
const announEventsDiv = document.getElementById("announ-events"); // Eventtos en el Tablón de Anuncios

const linksData = `<a href=""><b>01</b> Link</a>
<a href=""><b>02</b> Link</a>
<a href=""><b>03</b> Link</a>
<a href=""><b>04</b> Link</a>
<a href=""><b>05</b> Link</a>
<a href=""><b>06</b> Link</a>
<a href=""><b>07</b> Link</a>
<a href=""><b>08</b> Link</a>
<a href=""><b>09</b> Link</a>
<a href=""><b>10</b> Link</a>
<a href=""><b>11</b> Link</a>
<a href=""><b>12</b> Link</a>`;

const eventsData = `
<a href="" class="my-event">
<b>00.00</b>
<span>My money's in that office, right?</span>
</a>
<a href="" class="my-event">
<b>00.00</b>
<span>My money's in that office, right?</span>
</a>
<a href="" class="my-event">
<b>00.00</b>
<span>My money's in that office, right?</span>
</a>
<a href="" class="my-event">
<b>00.00</b>
<span>My money's in that office, right?</span>
</a>`;

sideLinksDiv.innerHTML = linksData;
announLinksDiv.innerHTML = linksData;

sideEventsDiv.innerHTML = eventsData;
announEventsDiv.innerHTML = eventsData;

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
    if (!mobileSidebar.classList.contains("active")) {
        console.log("Show Sidebar"); // TODO: Remove console.log
        mobileSidebar.classList.add("active");
        overlay.classList.remove("hidden");
        document.body.classList.add("no-scroll");
    }
}

/**
 * Oculta la sidebar móvil si está activa.
 * También oculta el overlay y reestablece el scroll del cuerpo.
 */
function hideSidebar() {
    if (mobileSidebar.classList.contains("active")) {
        console.log("Hide Sidebar"); // TODO: Remove console.log
        mobileSidebar.classList.remove("active");
        overlay.classList.add("hidden");
        document.body.classList.remove("no-scroll");
    }
}