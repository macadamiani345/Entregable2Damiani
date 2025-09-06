//pedir nombre
let nombreUsuario = "";

function pedirNombre () {
    nombreUsuario = prompt("¡Bienvenida a Beauty Bar! \n¿Cuál es tu nombre?");
    if (!nombreUsuario) {
        nombreUsuario = "Invitada";
    }
    alert("Hola " + nombreUsuario + "!");
}

//ofrecer descuento

function ofrecerDescuento() {
    let quiereDescuento = confirm("Hola " + nombreUsuario + ", tenemos un 20% de descuento en tu primera compra. ¿Quieres aprovecharlo?");
    
    if (quiereDescuento) {
        alert("¡Genial! Tu descuento del 20% está activado");
        console.log(nombreUsuario + " aceptó el descuento.");
    } else {
        alert("No hay problema, " + nombreUsuario + ". ¡Disfruta tu experiencia en Beauty Bar!");
        console.log(nombreUsuario + " no quiso el descuento.");
    }
}

//mostrar productos

const listaBases = ["Flawless Filter Charlotte Tilbury - $49", "Airbrush Flawless Charlotte Tilbury - $49", "Backstage Face & Body Dior - $45", "Forever Skin Perfect 24H Multi-Use Dior - $57", "SurrealSkin® Luminous Hydrating By Mario - $48", "Positive Light Tinted Rare Beauty - $30"];
const listaBronzers = ["Beautiful Skin Sun-Kissed Glow Cream Charlotte Tilbury - $58", "Forever Nude Jumbo Dior - $54", "SoftSculpt® Cream By Mario - $34", "SoftSculpt® Talc-Free Blurring By Mario - $38", "Softsculpt® Multi-Use By Mario - $36", "Warm Wishes Effortless Cream Rare Beauty - $28", "Soft Pinch Liquid Rare Beauty - $28"];
const listaCorrectores = ["Beautiful Skin Medium to Full Coverage Charlotte Tilbury - $33", "Forever Skin Correct Full-Coverage Dior - $42", "Backstage Dior - $33", "SurrealSkin® Awakening By Mario - $29", "Liquid Touch Brightening Rare Beauty - $24"]; 
const listaRubores = ["Matte Beauty Charlotte Tilbury - $42", "Rosy Glow Powder Dior - $42", "Soft Pop Cream By Mario - $34", "Soft Pop Powder By Mario - $32", "Soft Pop Plumping Cream By Mario - $34", "Major Headlines Double-Take Crème & Powder Patrick Ta - $38", "Soft Pinch Liquid Rare Beauty - $25", "Stay Vulnerable Melting Cream Rare Beauty - $24"];
const listaSombras = ["Luxury Eyeshadow Palette Charlotte Tilbury - $55", "Diorshow 5 Couleurs Couture Eyeshadow Palette Dior - $72", "Master Mattes® Eyeshadow Palette By Mario - $56", "Major Dimension III Matte Eyeshadow Palette Patrick Ta - $70"];

function pedirCategoria() {
    let categoria = prompt("¿Qué clase de producto estás buscando? (Escribe: base / bronzer / corrector / rubor / sombras)").toLowerCase();
    return categoria;
}

function mostrarProductos(categoria) {
    let lista = [];

    if (categoria === "base") {
        lista = listaBases;
    } else if (categoria === "bronzer") {
        lista = listaBronzers;
    } else if (categoria === "corrector") {
        lista = listaCorrectores;
    } else if (categoria === "rubor"){
        lista = listaRubores;
    } else if (categoria === "sombras"){
        lista = listaSombras;
    } else {
        alert("No tenemos esa categoría");
        return;
    }

    let mensaje = "Estos son los productos disponibles \n";
    for (let i = 0; i < lista.length; i++) {
        mensaje += (i + 1) + ". " + lista[i] + "\n";
    }

    alert(mensaje);
}

//simuladores

function simuladorBienvenida() {
    pedirNombre();
    ofrecerDescuento();
}

simuladorBienvenida();
let categoriaElegida = pedirCategoria();
mostrarProductos(categoriaElegida);


