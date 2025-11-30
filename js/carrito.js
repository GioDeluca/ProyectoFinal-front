
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}


function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


function agregarAlCarrito(nombre, precio) {
    let carrito = obtenerCarrito();
    carrito.push({ nombre, precio });
    guardarCarrito(carrito);

    mostrarNotificacion();
}


function mostrarCarrito() {
    let carrito = obtenerCarrito();
    let contenedor = document.getElementById("carrito-items");
    let totalTexto = document.getElementById("total");

    contenedor.innerHTML = "";

    let total = 0;

    carrito.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("item-carrito");

        div.innerHTML = `
            <p><strong>${item.nombre}</strong></p>
            <p>Precio: $${item.precio}</p>
            <hr>
        `;

        total += item.precio;
        contenedor.appendChild(div);
    });

    totalTexto.textContent = "$" + total;
}


function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

function mostrarNotificacion() {
    let n = document.getElementById("notificacion");
    n.style.display = "block";

    setTimeout(() => {
        n.style.display = "none";
    }, 1500);
}

