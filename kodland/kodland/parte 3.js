// BANCO DE DATOS DE CURIOSIDADES EXPANSIBLE
const datosCuriosos = [
    "🏙️ Bogotá está ubicada a 2.640 metros sobre el nivel del mar, lo que la convierte en la tercera capital más alta de Sudamérica.",
    "🚴 Posee la red de 'Ciclorrutas' más extensa de América Latina, con más de 560 kilómetros dedicados exclusivamente a bicicletas.",
    "🏆 El Museo del Oro alberga la colección de orfebrería prehispánica más grande del mundo, con más de 34.000 piezas de oro.",
    "🌳 El Parque Simón Bolívar es un mega-parque urbano que supera en tamaño al mismísimo Central Park de Nueva York en su zona verde continua.",
    "📜 Su nombre original precolombino era 'Bacatá', que en lengua muisca significa 'Cercado fuera de la labranza'.",
    "📚 Durante el siglo XIX fue apodada 'La Atenas Sudamericana' debido a su gran auge cultural, literario y académico.",
    "🛸 El cerro de Monserrate no es un volcán, a pesar del mito urbano popular de la ciudad; es una formación geológica de sedimentos."
];

// BANCO DE DATOS DE CLIMA SIMULADO
const estadosClima = [
    "⛅ Sabana Nublada: 14°C. Típica tarde templada con vientos fríos desde los cerros orientales. Ideal para un chocolate con queso.",
    "🌧️ Aguacero en la Candelaria: 11°C. ¡Saca el paraguas! Tormenta pasajera con granizo ligero. Típico clima impredecible de Bogotá.",
    "☀️ Sol Sabanero radiante: 19°C. Clima espectacular para recorrer la ciclovía. No olvides usar bloqueador solar.",
    "🌫️ Niebla Matutina: 8°C. Los cerros amanecieron completamente cubiertos de niebla espesa. Abrígate bien."
];

// AL CARGAR LA PÁGINA (Persistencia y Inicialización)
window.onload = function() {
    // 1. Control de Nombre de Usuario Permanente
    let nombreUsuario = localStorage.getItem("nombreViajero");
    
    if (!nombreUsuario) {
        nombreUsuario = prompt("👋 ¡Hola! Bienvenido a nuestro portal. ¿Cuál es tu nombre?");
        if (nombreUsuario && nombreUsuario.trim() !== "") {
            localStorage.setItem("nombreViajero", nombreUsuario.trim());
        } else {
            nombreUsuario = "Viajero";
        }
    }
    
    document.getElementById("saludo-usuario").innerHTML = `¡Hola, ${nombreUsuario}! Disfruta de Bogotá.`;

    // 2. Control del Modo Oscuro Guardado por el Usuario
    const modoOscuroGuardado = localStorage.getItem("darkmode");
    if (modoOscuroGuardado === "activo") {
        document.body.classList.add("dark-mode");
        document.getElementById("btn-tema").innerText = "☀️ Modo Claro";
    }
};

// 🌗 FUNCIÓN AVANZADA DE MODO OSCURO CON LOCALSTORAGE
function cambiarTema() {
    document.body.classList.toggle("dark-mode");
    const boton = document.getElementById("btn-tema");
    
    if (document.body.classList.contains("dark-mode")) {
        boton.innerText = "☀️ Modo Claro";
        localStorage.setItem("darkmode", "activo");
    } else {
        boton.innerText = "🌙 Modo Oscuro";
        localStorage.setItem("darkmode", "inactivo");
    }
}

// 🎲 SELECCIÓN DE DATOS ALEATORIOS
function mostrarDato() {
    const pantalla = document.getElementById("dato");
    let indice = Math.floor(Math.random() * datosCuriosos.length);
    
    pantalla.innerHTML = datosCuriosos[indice];
    animarPantallaConsola();
}

// 🕒 RELOJ LOCAL
function mostrarHora() {
    const ahora = new Date();
    document.getElementById("dato").innerHTML = `🕒 Hora local del sistema: ${ahora.toLocaleTimeString()} - Bogotá opera en zona horaria UTC-5.`;
    animarPantallaConsola();
}

// ⛅ SIMULADOR DE CLIMA DINÁMICO
function simularClima() {
    let indice = Math.floor(Math.random() * estadosClima.length);
    document.getElementById("dato").innerHTML = `🌡️ Estado del clima simulado: ${estadosClima[indice]}`;
    animarPantallaConsola();
}

// Animación helper para la consola interactiva
function animarPantallaConsola() {
    const panel = document.querySelector(".panel-pantalla");
    panel.style.borderLeftColor = "#b71c1c";
    setTimeout(() => {
        panel.style.borderLeftColor = "#ffd600";
    }, 400);
}

// 📑 CONTROL DE PESTAÑAS (TABS) DE LA HISTORIA
function cambiarTab(evento, idContenido) {
    // Ocultar todos los contenidos de las pestañas
    const contenidos = document.querySelectorAll(".tab-contenido");
    contenidos.forEach(cont => cont.classList.remove("activa"));

    // Desactivar todos los botones
    const botones = document.querySelectorAll(".tab-btn");
    botones.forEach(btn => btn.classList.remove("activa"));

    // Activar la pestaña y el botón correspondiente
    document.getElementById(idContenido).classList.add("activa");
    evento.currentTarget.classList.add("activa");
}

// 🔍 FILTRO LÓGICO DE LA GALERÍA DE DESTINOS
function filtrarGaleria(categoria) {
    // Manejar estado activo de los botones de filtro
    const botonesFiltro = document.querySelectorAll(".btn-filtro");
    botonesFiltro.forEach(btn => btn.classList.remove("activo"));
    event.currentTarget.classList.add("activo");

    // Filtrar tarjetas físicamente
    const tarjetas = document.querySelectorAll(".tarjeta");
    
    tarjetas.forEach(tarjeta => {
        if (categoria === "todos") {
            tarjeta.style.display = "flex";
        } else {
            if (tarjeta.classList.contains(categoria)) {
                tarjeta.style.display = "flex";
            } else {
                tarjeta.style.display = "none";
            }
        }
    });
}

// ✉️ VALIDACIÓN Y SIMULACIÓN DE ENVÍO DE FORMULARIO
function validarFormulario(evento) {
    evento.preventDefault(); // Evita recargar la página
    
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const interes = document.getElementById("interes").value;
    const feedback = document.getElementById("feedback-formulario");

    // Simular procesamiento del servidor
    feedback.className = "feedback-formulario exito";
    feedback.innerHTML = `⏳ Procesando tu registro, ${nombre}...`;
    
    setTimeout(() => {
        feedback.innerHTML = `🎉 ¡Perfecto! Hemos registrado tu interés por la categoría: "${interes}". Te enviaremos tu itinerario gratuito al correo: ${correo} en los próximos minutos.`;
        document.getElementById("formulario-contacto").reset();
    }, 1500);
}