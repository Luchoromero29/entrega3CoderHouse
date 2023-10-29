const productos = [
    { id: 0, tipo: "Teclado", marca: "Roccat", modelo: "Suora FX", precio: 5200, categoria: "Periféricos", descripcion: "Teclas retroiluminadas, diseño sin teclado numérico" },
    { id: 1, tipo: "Procesador", marca: "Intel", modelo: "Core i9-11900K", precio: 29000, categoria: "Componentes", descripcion: "8 núcleos, 16 hilos, frecuencia base 3.5 GHz" },
    { id: 2, tipo: "Placa de Video", marca: "AMD", modelo: "Radeon RX 6900 XT", precio: 75000, categoria: "Componentes", descripcion: "18 GB GDDR6, rendimiento de alta gama" },
    { id: 3, tipo: "Monitor", marca: "LG", modelo: "27GL83A-B", precio: 6000, categoria: "Periféricos", descripcion: "27 pulgadas, resolución 2K, 144 Hz" },
    { id: 4, tipo: "Mouse", marca: "SteelSeries", modelo: "Rival 600", precio: 6800, categoria: "Periféricos", descripcion: "Doble sensor óptico, peso ajustable" },
    { id: 5, tipo: "Teclado", marca: "Corsair", modelo: "K95 RGB Platinum XT", precio: 9000, categoria: "Periféricos", descripcion: "Teclas mecánicas Cherry MX, retroiluminación RGB" },
    { id: 6, tipo: "Procesador", marca: "AMD", modelo: "Ryzen 7 5800X", precio: 24000, categoria: "Componentes", descripcion: "8 núcleos, 16 hilos, frecuencia base 3.8 GHz" },
    { id: 7, tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce RTX 3060 Ti", precio: 55000, categoria: "Componentes", descripcion: "8 GB GDDR6, trazado de rayos en tiempo real" },
    { id: 8, tipo: "Monitor", marca: "Acer", modelo: "Predator XB271HU", precio: 8500, categoria: "Periféricos", descripcion: "27 pulgadas, resolución 2K, 165 Hz" },
    { id: 9, tipo: "Mouse", marca: "Logitech", modelo: "G Pro Wireless", precio: 7000, categoria: "Periféricos", descripcion: "Diseño ambidiestro, sensor HERO" },
    { id: 10, tipo: "Teclado", marca: "Roccat", modelo: "Vulcan 122 AIMO", precio: 7500, categoria: "Periféricos", descripcion: "Switches Titan, iluminación AIMO" },
    { id: 11, tipo: "Procesador", marca: "Intel", modelo: "Core i7-11700K", precio: 27000, categoria: "Componentes", descripcion: "8 núcleos, 16 hilos, frecuencia base 3.6 GHz" },
    { id: 12, tipo: "Placa de Video", marca: "MSI", modelo: "GeForce RTX 3070", precio: 60000, categoria: "Componentes", descripcion: "8 GB GDDR6, diseño térmico avanzado" },
    { id: 13, tipo: "Monitor", marca: "Samsung", modelo: "Odyssey G7", precio: 10000, categoria: "Periféricos", descripcion: "32 pulgadas, resolución 2K, 240 Hz" },
    { id: 14, tipo: "Mouse", marca: "HyperX", modelo: "Pulsefire FPS Pro", precio: 4500, categoria: "Periféricos", descripcion: "Sensor Pixart 3389, iluminación RGB" },
    { id: 15, tipo: "Teclado", marca: "Ducky", modelo: "One 2 Mini", precio: 6000, categoria: "Periféricos", descripcion: "Teclas PBT de doble disparo, diseño compacto" },
    { id: 16, tipo: "Procesador", marca: "AMD", modelo: "Ryzen 5 5600X", precio: 19000, categoria: "Componentes", descripcion: "6 núcleos, 12 hilos, frecuencia base 3.7 GHz" },
    { id: 17, tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce GTX 1660 Super", precio: 35000, categoria: "Componentes", descripcion: "6 GB GDDR5, alto rendimiento en juegos" },
    { id: 18, tipo: "Monitor", marca: "BenQ", modelo: "PD2700U", precio: 9000, categoria: "Periféricos", descripcion: "27 pulgadas, 4K UHD, calibración de color" },
    { id: 19, tipo: "Mouse", marca: "Razer", modelo: "DeathAdder Elite", precio: 5200, categoria: "Periféricos", descripcion: "Sensor óptico 16,000 DPI, retroiluminación Chroma" },
    { id: 20, tipo: "Teclado", marca: "Logitech", modelo: "G Pro X Mechanical Gaming", precio: 8500, categoria: "Periféricos", descripcion: "Teclas intercambiables, diseño compacto" },
    { id: 21, tipo: "Procesador", marca: "Intel", modelo: "Core i5-11600K", precio: 18000, categoria: "Componentes", descripcion: "6 núcleos, 12 hilos, frecuencia base 3.9 GHz" },
    { id: 22, tipo: "Placa de Video", marca: "AMD", modelo: "Radeon RX 6700 XT", precio: 55000, categoria: "Componentes", descripcion: "12 GB GDDR6, excelente rendimiento en 2K" },
    { id: 23, tipo: "Monitor", marca: "AOC", modelo: "CQ32G1", precio: 6500, categoria: "Periféricos", descripcion: "31.5 pulgadas, resolución 2K, 144 Hz" },
    { id: 24, tipo: "Mouse", marca: "Glorious", modelo: "Model O", precio: 6900, categoria: "Periféricos", descripcion: "Sensor óptico Pixart 3360, diseño ligero" },
    { id: 25, tipo: "Teclado", marca: "SteelSeries", modelo: "Apex Pro TKL", precio: 9200, categoria: "Periféricos", descripcion: "Switches ajustables, retroiluminación RGB" },
    { id: 26, tipo: "Procesador", marca: "AMD", modelo: "Ryzen 3 3300X", precio: 12000, categoria: "Componentes", descripcion: "4 núcleos, 8 hilos, frecuencia base 3.8 GHz" },
    { id: 27, tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce GTX 1650 Super", precio: 30000, categoria: "Componentes", descripcion: "4 GB GDDR6, rendimiento para juegos" },
    { id: 28, tipo: "Monitor", marca: "Dell", modelo: "S2719DGF", precio: 7000, categoria: "Periféricos", descripcion: "27 pulgadas, resolución 2K, 155 Hz" },
    { id: 29, tipo: "Mouse", marca: "Cooler Master", modelo: "MM710", precio: 5500, categoria: "Periféricos", descripcion: "Ultraligero, sensor Pixart PMW3389" },
    { id: 30, tipo: "Teclado", marca: "Ducky", modelo: "One 2 Mini", precio: 6000, categoria: "Periféricos", descripcion: "Teclas PBT de doble disparo, diseño compacto" },
    { id: 31, tipo: "Procesador", marca: "Intel", modelo: "Core i3-10100", precio: 11000, categoria: "Componentes", descripcion: "4 núcleos, 8 hilos, frecuencia base 3.6 GHz" },
    { id: 32, tipo: "Placa de Video", marca: "AMD", modelo: "Radeon RX 5500 XT", precio: 22000, categoria: "Componentes", descripcion: "8 GB GDDR6, rendimiento en juegos" },
    { id: 33, tipo: "Monitor", marca: "Asus", modelo: "VG279Q", precio: 4000, categoria: "Periféricos", descripcion: "27 pulgadas, resolución Full HD, 144 Hz" },
    { id: 34, tipo: "Mouse", marca: "Logitech", modelo: "G502 Hero", precio: 6000, categoria: "Periféricos", descripcion: "Sensor HERO 16K, 11 botones programables" },
    { id: 35, tipo: "Teclado", marca: "HyperX", modelo: "Alloy FPS Pro", precio: 4800, categoria: "Periféricos", descripcion: "Compacto, teclas mecánicas Cherry MX" },
    { id: 36, tipo: "Procesador", marca: "AMD", modelo: "Ryzen 9 3950X", precio: 40000, categoria: "Componentes", descripcion: "16 núcleos, 32 hilos, frecuencia base 3.5 GHz" },
    { id: 37, tipo: "Placa de Video", marca: "NVIDIA", modelo: "GeForce GTX 1660", precio: 32000, categoria: "Componentes", descripcion: "6 GB GDDR5, rendimiento en juegos" },
    { id: 38, tipo: "Monitor", marca: "ViewSonic", modelo: "XG2402", precio: 4500, categoria: "Periféricos", descripcion: "24 pulgadas, resolución Full HD, 144 Hz" },
    { id: 39, tipo: "Mouse", marca: "Corsair", modelo: "Harpoon RGB", precio: 3500, categoria: "Periféricos", descripcion: "Sensor óptico 6,000 DPI, diseño ergonómico" }
];

let productosCarrito = [];


//recuperamos el carrito o lo inicializamos vacio
const carrito = () => {
    productosCarrito = JSON.parse(localStorage.getItem("carrito")) || localStorage.setItem("carrito", JSON.stringify([]));

    //incrementamos contador de carrito
    let cantidadTotal = 0
    productosCarrito.forEach(producto => {
        cantidadTotal+=producto.cantidad
    });
    const contador = document.getElementById("header-contador");
    contador.innerHTML = cantidadTotal || "0"
}

//localStorage.clear();


//al cargar la pagina aparecen todos los productos y se inicializa el carrito
document.addEventListener('DOMContentLoaded', () => {
    busqueda(document.getElementById("buscador"))
    carrito();

})

//le agregamos el evento click a cada boton de agregar al acarrito de la busqueda
const agregarEventos = () => {

    //recupero todos los botones
    let buttonAgregar = document.querySelectorAll("#tarjeta-button-agregar")

    //recorro el array de botones y agrego los eventos
    buttonAgregar.forEach(button => {
        button.addEventListener("click", () => agregarAlCarrito(button.parentElement))
    });

    let buttonBorrarCarrito = document.getElementById("carrito-borrar")
    buttonBorrarCarrito.addEventListener("click",() => limpiarCarrito());
}

function agregarAlCarrito(tarjetaProducto) {

    //busco el producto que se quiere agregar y lo guardo en una variable auxiliar
    const producto = busquedaProducto(tarjetaProducto.id)

    //creo un nuevo pproducto que va a ser el que se agreugue al carrito con la propiedad cantidad
    const productoCarrito = {
        id: producto.id,
        tipo: producto.tipo,
        marca: producto.marca,
        modelo: producto.modelo,
        precio: producto.precio,
        descripcion: producto.descripcion,
        cantidad: 0
    }

    //revisamos si ya existe este producto en el carrito
    if (busquedaEnCarrito(productoCarrito)) {
        productosCarrito.forEach(producto => {
            if (producto.id === productoCarrito.id) ++producto.cantidad
        });
    } else {
        productoCarrito.cantidad = 1;
        productosCarrito.push(productoCarrito);
    }

    //actualizo los cambios en el localStorage
    localStorage.setItem("carrito", JSON.stringify(productosCarrito))

    //contamos cantidad total de productos
    let cantidadTotal = 0
    productosCarrito.forEach(producto => {
        cantidadTotal+=producto.cantidad
    });

    //actualizamos contador carrito
    const contador = document.getElementById("header-contador");
    contador.innerHTML = cantidadTotal

}



//retorna el producto que coincida con el id
function busquedaProducto(id) {
    return productos.find(producto =>
        producto.id == id
    )
}

//retorna un producto si es que existe en el carrito, sino null
function busquedaEnCarrito(productoCarrito) {
    return productosCarrito.find(producto => producto.id == productoCarrito.id)
}

//busqueda para productos
function busqueda(busqueda) {

    busqueda = busqueda.value;
    limpiarResultados();
    //caso vacio
    if (busqueda === "" || busqueda === null) {
        for (const producto of productos) {
            revisionFiltrado(producto)
        }
    } else {
        //caso con contenido
        busqueda = busqueda.toLowerCase();
        for (const producto of productos) {
            if (producto.modelo.toLowerCase().includes(busqueda) || producto.marca.toLowerCase().includes(busqueda) || producto.tipo.toLowerCase().includes(busqueda)) {
                revisionFiltrado(producto);
            }
        }
    }
    //asigno evento a los resultados
    agregarEventos();

    //si no hubieron resultados
    if (document.getElementById("productos").innerHTML === "") {
        document.getElementById("productos").innerHTML = "<h3> No se encontraron resultados </h3>"
    }

}

//limpiamos resultados anteriores para no acumular busquedas
function limpiarResultados() {
    let lista = document.getElementById("productos")
    lista.innerHTML = '';
    let carritoProductos = document.getElementsByClassName("carrito-productos")
    carritoProductos.innerHTML = "";
    let carrito = document.getElementById("carrito")
    carrito.setAttribute("class", "hidden");

}

//creamos la tarjeta de cada producto de la busqueda
function crearTarjeta(producto) {

    let tarjeta = document.createElement("div")
    tarjeta.innerHTML = `
        <h3 class="titulo">${producto.tipo} ${producto.marca} ${producto.modelo}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <h4 class="precio">$${producto.precio} ARS</h4>
        <button id="tarjeta-button-agregar"  class="tarjeta-button"  type="button">
            <img src="Icons/AgregarCarrito.png" alt="icon AgregarCarrito">
        </button>`

    tarjeta.setAttribute("class", "tarjeta-producto")
    tarjeta.setAttribute("id", producto.id);

    document.getElementById("productos").append(tarjeta);
}
//metodo de filtrado, revisa si se aplicaron filtros
function revisionFiltrado(producto) {

    let filtroMarca = document.getElementById("filtro-marca").value;
    let filtroTipo = document.getElementById("filtro-tipo").value;

    if (filtroMarca != "") {
        filtroMarca = filtroMarca.toLowerCase()
    }
    if (filtroTipo != "") {
        filtroTipo = filtroTipo.toLowerCase()
    }

    if (filtroMarca === "" && filtroTipo === "") {
        crearTarjeta(producto)

    } else if (filtroMarca === "") {
        if (producto.tipo.toLowerCase() === filtroTipo) {
            crearTarjeta(producto)

        }
    } else if (filtroTipo === "") {
        if (producto.marca.toLowerCase() === filtroMarca) {
            crearTarjeta(producto)

        }
    } else {
        if (producto.tipo.toLowerCase() === filtroTipo && producto.marca.toLowerCase() === filtroMarca) {
            crearTarjeta(producto)

        }
    }

}

const buttonCarrito = document.getElementById("header-carrito-button")
buttonCarrito.addEventListener("click", () => crearTarjetaCarrito());

const crearTarjetaCarrito = () => {

    //limpio las busquedas
    limpiarResultados();
    let carritoTotal = document.getElementById("carrito")

    //hago visible el carrito
    carritoTotal.classList.remove("hidden");
    carritoTotal.setAttribute("class", "carrito")

    //actualizo contador del carrito
    let cantidadTotal = 0
    productosCarrito.forEach(producto => {
        cantidadTotal+=producto.cantidad
    });
    const contador = document.getElementById("header-contador");
    contador.innerHTML = cantidadTotal|| "0"

    //traigo la seccion de productos y creo las tarjetas de los productos
    let carritoProductos = document.getElementById("carrito-productos")

    //caso de que no hayan productos
    if (productosCarrito.length === 0) {
        carritoProductos.innerHTML = "No has agregado ningun elemento al carrito"
    } else {
        carritoProductos.innerHTML = ""
        productosCarrito.forEach(producto => {
            const tarjetaCarrito = document.createElement("div");

            tarjetaCarrito.innerHTML = `
                <div class="carrito-info-producto" id="${producto.id}">
                    <h3>${producto.tipo} ${producto.marca} ${producto.modelo}</h3>
                    <p>${producto.descripcion}</p>
                </div>
                <div class="carrito-cantidades">
                    <h4>precio: $${producto.precio * producto.cantidad} ARS</h4>
                    <h4>cantidad: ${producto.cantidad}</h4>
                </div>
                <div class="carrito-botones">
                    <button class="button-sumarProducto" id="button-sumarProducto">
                        <img src="Icons/sumar.png" alt="icon sumar">
                    </button>
                    <button class="button-eliminarProducto" id="button-eliminarProducto">
                        <img src="Icons/EliminarCarrito.png" alt="icon eliminar">
                    </button>
                </div>
            `
            //los agrego al html
            tarjetaCarrito.setAttribute("class", "carrito-tarjeta")
            carritoProductos.append(tarjetaCarrito);
        });

        //cargamos los eventos de los botones
        let buttonEliminarProducto = document.querySelectorAll(".button-eliminarProducto")
        let buttonAgregarProducto = document.querySelectorAll(".button-sumarProducto")

        //recorro todos los botones para asignar los eventos
        buttonEliminarProducto.forEach(button => {
            button.addEventListener("click", () => eliminarProducto(button.parentElement.parentElement))
        });
        buttonAgregarProducto.forEach(button => {
            button.addEventListener("click", () => agregarProducto(button.parentElement.parentElement))
        });
        calculoDineroTotal();
        

    }
}
//elimina un producto del carrito
const eliminarProducto = (tarjetaProducto) => {

    tarjetaProducto = tarjetaProducto.children[0]

    let productoBuscado = productosCarrito.find((producto) => producto.id == tarjetaProducto.id)

    //revisa si hay mas o lo tiene que eliminar
    if (productoBuscado.cantidad === 1) {
        productosCarrito = productosCarrito.filter((producto) => producto.id != tarjetaProducto.id)
    } else {
        productoBuscado.cantidad--;
    }

    //actualiza el local storage
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    crearTarjetaCarrito();
}

//metodo que suma mas productos iguales
const agregarProducto = (tarjetaProducto) => {
    tarjetaProducto = tarjetaProducto.children[0]

    let productoBuscado = productosCarrito.find((producto) => producto.id == tarjetaProducto.id)

    productoBuscado.cantidad++

    //actualiza el localStorage
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    crearTarjetaCarrito();
}

const limpiarCarrito = () => {
    productosCarrito = [];
    localStorage.setItem("carrito",JSON.stringify(productosCarrito))
    crearTarjetaCarrito();
}

const calculoDineroTotal = () => {
    let dineroTotal = 0;
    productosCarrito.forEach(producto => {
        dineroTotal += producto.precio * producto.cantidad;
    });
    console.log("entre aca");
    console.log(productosCarrito);
        if(productosCarrito.length === 0){
            dineroTotal = 0
        }
            

        document.getElementById("carrito-precio-total").innerHTML = `TOTAL :   $${dineroTotal} ARS`
}