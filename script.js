const productos = {
    base: [
        { marca: "Charlotte Tilbury" , nombre: "Flawless Filter Charlotte Tilbury", precio: 49.00 },
        { marca: "Charlotte Tilbury", nombre: "Airbrush Flawless Charlotte Tilbury", precio: 49.00 },
        { marca: "Dior Beauty", nombre: "Backstage Face & Body Dior", precio: 45.00 },
        { marca: "Dior Beauty", nombre: "Forever Skin Perfect 24H Multi-Use Dior", precio: 57.00 },
        { marca: "Make Up by Mario", nombre: "SurrealSkin® Luminous Hydrating By Mario", precio: 48.00 },
        { marca: "Patrick Ta", nombre: "Major Skin Crème Foundation and Finishing Powder Duo", precio: 52.00 },
        { marca: "Rare Beauty", nombre: "Positive Light Tinted Rare Beauty", precio: 30.00 }
    ],
    bronzer: [
        { marca: "Charlotte Tilbury", nombre: "Beautiful Skin Sun-Kissed Glow Cream Charlotte Tilbury", precio: 58.00 },
        { marca: "Dior Beauty", nombre: "Forever Nude Jumbo Dior", precio: 54.00 },
        { marca: "Make Up by Mario", nombre: "SoftSculpt® Cream Contour & Bronzer Shaping Stick®", precio: 34.00 },
        { marca: "Make Up by Mario", nombre: "SoftSculpt Transforming Skin Enhancer®", precio: 34.00 },
        { marca: "Make Up by Mario", nombre: "Softsculpt® Multi-Use Bronzing & Shaping Serum with Hyaluronic Acid", precio: 36.00 },
        { marca: "Rare Beauty", nombre: "Warm Wishes Effortless Cream Rare Beauty", precio: 28.00 },
        { marca: "Rare Beauty", nombre: "Soft Pinch Liquid Rare Beauty", precio: 28.00 }
    ],
    corrector: [
        { marca: "Charlotte Tilbury", nombre: "Beautiful Skin Medium to Full Coverage Charlotte Tilbury", precio: 33.00 },
        { marca: "Dior Beauty", nombre: "Forever Skin Correct Full-Coverage Dior", precio: 42.00 },
        { marca: "Dior Beauty", nombre: "Backstage Dior", precio: 33.00 },
        { marca: "Make Up by Mario", nombre: "SurrealSkin® Awakening By Mario", precio: 29.00 },
        { marca: "Rare Beauty", nombre: "Liquid Touch Brightening Rare Beauty", precio: 24.00 }
    ],
    rubor: [
        { marca: "Charlotte Tilbury", nombre: "Matte Beauty Charlotte Tilbury", precio: 42.00 },
        { marca: "Dior Beauty", nombre: "Rosy Glow Powder Dior", precio: 42.00 },
        { marca: "Make Up by Mario", nombre: "Soft Pop Cream Blush Stick", precio: 34.00 },
        { marca: "Make Up by Mario", nombre: "Soft Pop Powder Blush", precio: 32.00 },
        { marca: "Make Up by Mario", nombre: "Soft Pop Plumping Cream Blush Veil", precio: 34.00 },
        { marca: "Patrick Ta", nombre: "Major Headlines Double-Take Crème & Powder Patrick Ta", precio: 38.00 },
        { marca: "Rare Beauty", nombre: "Soft Pinch Liquid Rare Beauty", precio: 25.00 },
        { marca: "Rare Beauty", nombre: "Stay Vulnerable Melting Cream Rare Beauty", precio: 24.00 }
    ],
    sombras: [
        { marca: "Charlotte Tilbury", nombre: "Luxury Eyeshadow Palette Charlotte Tilbury", precio: 55.00 },
        { marca: "Dior Beauty", nombre: "Diorshow 5 Couleurs Couture Eyeshadow Palette Dior", precio: 72.00 },
        { marca: "Make Up by Mario", nombre: "Master Mattes® Eyeshadow Palette By Mario", precio: 56.00 },
        { marca: "Patrick Ta", nombre: "Major Dimension III Matte Eyeshadow Palette Patrick Ta", precio: 70.00 },
        { marca: "Patrick Ta", nombre: "Major Dimension Eye Illusion Eyeshadow Duo", precio: 42.00 },
    ]
};

//
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarMensaje(texto) {
    let mensaje = document.createElement("div");
    mensaje.className = "mensaje-carrito";
    mensaje.innerText = texto;

    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 5000);
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//actualiza el contador en el ícono
function actualizarContadorCarrito() {
    const contador = document.getElementById("contadorCarrito");
    if (contador) {
        const totalItems = carrito.reduce((sum, p) => sum + p.cantidad, 0);
        contador.innerText = totalItems;
    }
}

//agrega un producto al carrito
function agregarProducto(nombre, precio) {
    const productoExistente = carrito.find(p => p.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    guardarCarrito();
    actualizarContadorCarrito();

    if (document.getElementById("listaCarrito")) {
        mostrarCarrito();
    }
    
    mostrarMensaje(`${nombre} agregado al carrito 🛒`);
}

//muestra el carrito en carrito.html
function mostrarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const total = document.getElementById("totalCarrito");
    if (!lista || !total) return;

    lista.innerHTML = "";
    let suma = 0;

    carrito.forEach((p, index) => {
        suma += p.precio * p.cantidad;
        const li = document.createElement("li");
        li.innerHTML = `
            ${p.nombre} - $${p.precio} x ${p.cantidad}
            <button onclick="eliminarProducto(${index})">-</button>
            <button onclick="agregarProductoCarrito(${index})">+</button>
        `;
        lista.appendChild(li);
    });

    total.innerText = "Total: $" + suma.toFixed(2);
}

// resta un producto o elimina si queda en 0
function eliminarProducto(indice) {
    if (carrito[indice].cantidad > 1) {
        carrito[indice].cantidad--;
    } else {
        carrito.splice(indice, 1);
    }
    guardarCarrito();
    mostrarCarrito();
    actualizarContadorCarrito();
}

// suma un producto directamente en carrito.html
function agregarProductoCarrito(indice) {
    carrito[indice].cantidad++;
    guardarCarrito();
    mostrarCarrito();
    actualizarContadorCarrito();
}

//vacia el carrito completo
function configurarVaciarCarrito() {
    const vaciarBtn = document.getElementById("vaciarCarrito");
    if (vaciarBtn) {
        vaciarBtn.addEventListener("click", () => {
            carrito = [];
            guardarCarrito();
            mostrarCarrito();
            actualizarContadorCarrito();
        });
    }
}

//compra el carrito
function configurarCompra() {
    const comprarBtn = document.querySelector("button.comprar");
    if (comprarBtn) {
        comprarBtn.addEventListener("click", () => {
            if (carrito.length === 0) {
                mostrarMensaje("Tu carrito está vacío 😅");
            } else {
                carrito = [];
                guardarCarrito();
                mostrarCarrito();
                actualizarContadorCarrito();
                alert("¡Gracias por tu compra! 🛒✨");
            }
        });
    }
}

//inicialización
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".agregarProductoCarrito").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const item = e.target.closest(".item");
            const nombre = item.querySelector(".nombre").innerText;
            const precio = parseFloat(item.querySelector(".precio").innerText.replace("$", ""));
            agregarProducto(nombre, precio);
        });
    });

    mostrarCarrito();
    configurarVaciarCarrito();
    configurarCompra();
    actualizarContadorCarrito();
});
