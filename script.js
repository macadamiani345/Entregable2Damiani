let nombreUsuario = "";
let descuentoActivo = false;

// Objeto que unifica todas las categorías de productos
const productos = {
    base: [
        { nombre: "Flawless Filter Charlotte Tilbury", precio: 49 },
        { nombre: "Airbrush Flawless Charlotte Tilbury", precio: 49 },
        { nombre: "Backstage Face & Body Dior", precio: 45 },
        { nombre: "Forever Skin Perfect 24H Multi-Use Dior", precio: 57 },
        { nombre: "SurrealSkin® Luminous Hydrating By Mario", precio: 48 },
        { nombre: "Positive Light Tinted Rare Beauty", precio: 30 }
    ],
    bronzer: [
        { nombre: "Beautiful Skin Sun-Kissed Glow Cream Charlotte Tilbury", precio: 58 },
        { nombre: "Forever Nude Jumbo Dior", precio: 54 },
        { nombre: "SoftSculpt® Cream By Mario", precio: 34 },
        { nombre: "SoftSculpt® Talc-Free Blurring By Mario", precio: 38 },
        { nombre: "Softsculpt® Multi-Use By Mario", precio: 36 },
        { nombre: "Warm Wishes Effortless Cream Rare Beauty", precio: 28 },
        { nombre: "Soft Pinch Liquid Rare Beauty", precio: 28 }
    ],
    corrector: [
        { nombre: "Beautiful Skin Medium to Full Coverage Charlotte Tilbury", precio: 33 },
        { nombre: "Forever Skin Correct Full-Coverage Dior", precio: 42 },
        { nombre: "Backstage Dior", precio: 33 },
        { nombre: "SurrealSkin® Awakening By Mario", precio: 29 },
        { nombre: "Liquid Touch Brightening Rare Beauty", precio: 24 }
    ],
    rubor: [
        { nombre: "Matte Beauty Charlotte Tilbury", precio: 42 },
        { nombre: "Rosy Glow Powder Dior", precio: 42 },
        { nombre: "Soft Pop Cream By Mario", precio: 34 },
        { nombre: "Soft Pop Powder By Mario", precio: 32 },
        { nombre: "Soft Pop Plumping Cream By Mario", precio: 34 },
        { nombre: "Major Headlines Double-Take Crème & Powder Patrick Ta", precio: 38 },
        { nombre: "Soft Pinch Liquid Rare Beauty", precio: 25 },
        { nombre: "Stay Vulnerable Melting Cream Rare Beauty", precio: 24 }
    ],
    sombras: [
        { nombre: "Luxury Eyeshadow Palette Charlotte Tilbury", precio: 55 },
        { nombre: "Diorshow 5 Couleurs Couture Eyeshadow Palette Dior", precio: 72 },
        { nombre: "Master Mattes® Eyeshadow Palette By Mario", precio: 56 },
        { nombre: "Major Dimension III Matte Eyeshadow Palette Patrick Ta", precio: 70 }
    ]
};

// Pedir nombre del usuario
function pedirNombre() {
    nombreUsuario = prompt("¡Bienvenida a Beauty Bar! \n¿Cuál es tu nombre?");
    if (!nombreUsuario) {
        nombreUsuario = "Invitada";
    }
    alert("Hola " + nombreUsuario + "!");
}

// Ofrecer descuento
function ofrecerDescuento() {
    descuentoActivo = confirm("Hola " + nombreUsuario + ", tenemos un 20% de descuento en tu primera compra. ¿Quieres aprovecharlo?");
    if (descuentoActivo) {
        alert("¡Genial! Tu descuento del 20% está activado");
        console.log(nombreUsuario + " aceptó el descuento.");
    } else {
        alert("No hay problema, " + nombreUsuario + ". ¡Disfruta tu experiencia en Beauty Bar!");
        console.log(nombreUsuario + " no quiso el descuento.");
    }
}

// Pedir categoría
function pedirCategoria() {
    let categoria = prompt("¿Qué clase de producto estás buscando? (Escribe: base, bronzer, corrector, rubor, sombras o 'salir o cancelar' para finalizar)").toLowerCase();
    return categoria;
}

// Mostrar productos de una categoría
function mostrarProductos(categoria) {
    if (categoria == "salir") {
        return false; 
    }

    if (!productos[categoria]) {
        alert("No tenemos la categoría '" + categoria + "'. Por favor, elige entre: " + Object.keys(productos).join(", "));
        return true;
    }

    let mensaje = "Estos son los productos disponibles en " + categoria + ":\n";
    let lista = productos[categoria];
    for (let i = 0; i < lista.length; i++) {
        let precio;
        if (descuentoActivo) {
            precio = (lista[i].precio * 0.8).toFixed(2); 
        } else {
            precio = lista[i].precio;
        }
        mensaje = mensaje + (i + 1) + ". " + lista[i].nombre + " - $" + precio + "\n";
    }

    alert(mensaje);
    return true; 
}

// Simulador principal
function simuladorBienvenida() {
    pedirNombre();
    ofrecerDescuento();
    
    let continuar = true;
    while (continuar) {
        let categoriaElegida = pedirCategoria();
        continuar = mostrarProductos(categoriaElegida);
    }
    
    alert("Gracias por visitar Beauty Bar, " + nombreUsuario + "!");
}

// Iniciar el simulador
simuladorBienvenida();