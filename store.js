document.addEventListener('DOMContentLoaded', () => {
    // Crear e insertar la hoja de estilo
    const estilo = document.createElement('link');
    estilo.rel = 'stylesheet';
    
    estilo.href = '/store.css'; 
    document.head.appendChild(estilo);
  
    // Crear el encabezado
    const encabezado = document.createElement('header');
  
    const tituloPrincipal = document.createElement('h1');
    tituloPrincipal.textContent = 'Store.hanako';
    encabezado.appendChild(tituloPrincipal);
  
    const contenedorIconos = document.createElement('section');
    contenedorIconos.classList.add('container-icon');
  
    const contenedorIconoCarrito = document.createElement('article');
    contenedorIconoCarrito.classList.add('container-cart-icon');
  
    const svgCarrito = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCarrito.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgCarrito.setAttribute('fill', 'none');
    svgCarrito.setAttribute('viewBox', '0 0 24 24');
    svgCarrito.setAttribute('stroke-width', '1.5');
    svgCarrito.setAttribute('stroke', 'currentColor');
    svgCarrito.classList.add('icon-cart');
  
    const pathCarrito = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathCarrito.setAttribute('stroke-linecap', 'round');
    pathCarrito.setAttribute('stroke-linejoin', 'round');
    pathCarrito.setAttribute('d', 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H1M7 13l-1 5h12l-1-5M10 21a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z');
    svgCarrito.appendChild(pathCarrito);
  
    const articuloContadorProductos = document.createElement('article');
    articuloContadorProductos.classList.add('count-products');
    articuloContadorProductos.id = 'carrito';
  
    const spanContadorProductos = document.createElement('span');
    spanContadorProductos.id = 'contador-productos';
    spanContadorProductos.textContent = '0';
  
    articuloContadorProductos.appendChild(spanContadorProductos);
    contenedorIconoCarrito.appendChild(svgCarrito);
    contenedorIconoCarrito.appendChild(articuloContadorProductos);
    contenedorIconos.appendChild(contenedorIconoCarrito);
  
    const contenedorProductosCarrito = document.createElement('section');
    contenedorProductosCarrito.classList.add('container-cart-products', 'hidden-cart');
  
    const seccionProductosCarrito = document.createElement('section');
    seccionProductosCarrito.classList.add('row-product');
  
    const articuloProductoCarrito = document.createElement('article');
    articuloProductoCarrito.classList.add('cart-product');
  
    const infoProductoCarrito = document.createElement('article');
    infoProductoCarrito.classList.add('info-cart-product');
  
    const spanCantidadProductoCarrito = document.createElement('span');
    spanCantidadProductoCarrito.classList.add('cantidad-producto-carrito');
    spanCantidadProductoCarrito.textContent = '1';
  
    const pTituloProductoCarrito = document.createElement('p');
    pTituloProductoCarrito.classList.add('titulo-producto-carrito');
    pTituloProductoCarrito.textContent = 'lampara de mariposas';
  
    const spanPrecioProductoCarrito = document.createElement('span');
    spanPrecioProductoCarrito.classList.add('precio-producto-carrito');
    spanPrecioProductoCarrito.textContent = '$50.000';
  
    infoProductoCarrito.appendChild(spanCantidadProductoCarrito);
    infoProductoCarrito.appendChild(pTituloProductoCarrito);
    infoProductoCarrito.appendChild(spanPrecioProductoCarrito);
  
    const svgCerrar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCerrar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgCerrar.setAttribute('fill', 'none');
    svgCerrar.setAttribute('viewBox', '0 0 24 24');
    svgCerrar.setAttribute('stroke-width', '1.5');
    svgCerrar.setAttribute('stroke', 'currentColor');
    svgCerrar.classList.add('icon-close');
  
    const pathCerrar = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathCerrar.setAttribute('stroke-linecap', 'round');
    pathCerrar.setAttribute('stroke-linejoin', 'round');
    pathCerrar.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    svgCerrar.appendChild(pathCerrar);
  
    articuloProductoCarrito.appendChild(infoProductoCarrito);
    articuloProductoCarrito.appendChild(svgCerrar);
    seccionProductosCarrito.appendChild(articuloProductoCarrito);
  
    const articuloTotalCarrito = document.createElement('article');
    articuloTotalCarrito.classList.add('cart-total', 'hidden');
  
    const h3TotalCarrito = document.createElement('h3');
    h3TotalCarrito.textContent = 'Total:';
  
    const spanTotalCarrito = document.createElement('span');
    spanTotalCarrito.classList.add('total-pagar');
    spanTotalCarrito.textContent = '$200';
  
    articuloTotalCarrito.appendChild(h3TotalCarrito);
    articuloTotalCarrito.appendChild(spanTotalCarrito);
  
    const pCarritoVacio = document.createElement('p');
    pCarritoVacio.classList.add('cart-empty');
      
    contenedorProductosCarrito.appendChild(seccionProductosCarrito);
    contenedorProductosCarrito.appendChild(articuloTotalCarrito);
    contenedorProductosCarrito.appendChild(pCarritoVacio);
    contenedorIconos.appendChild(contenedorProductosCarrito);
  
    encabezado.appendChild(contenedorIconos);
    document.body.appendChild(encabezado);

     
    // Crear el contenedor principal
    const contenedorPrincipal = document.createElement('main');
    contenedorPrincipal.classList.add('container-items');
  
    const productos = [
      { title: 'Tazas artesanales', price: '$25.000', img: 'https://i.pinimg.com/564x/35/97/78/359778ab1a2e32c8cbc680e9df839d53.jpg', id: 'click1' },
      { title: 'ninfas magicas', price: '$50.000', img: 'https://i.pinimg.com/564x/b5/1b/b9/b51bb9e3fa8eca18ddd1eefc430550b3.jpg' },
      { title: 'Lampara de mariposas', price: '$50.000', img: 'https://i.pinimg.com/564x/27/3b/b2/273bb22f55689e9288cf76bf6ce7b69a.jpg' },
      { title: 'Jarrones de calavera', price: '$35.000', img: 'https://i.pinimg.com/564x/4d/9c/bf/4d9cbfd081f9e2210392a88e31f0c296.jpg' },
      { title: 'Gimnasio para gatitos', price: '$150.000', img: 'https://i.pinimg.com/564x/72/da/a7/72daa7aa7ed91617313d5e5cce1c106e.jpg' },
      { title: 'Lampara de hada', price: '$90.000', img: 'https://i.pinimg.com/564x/38/2a/e8/382ae8889d5b616c28d00aed4ca51826.jpg' }
    ];
  
    productos.forEach(product => {
      const itemProducto = document.createElement('section');
      itemProducto.classList.add('item');
  
      const figuraProducto = document.createElement('figure');
  
      const imgProducto = document.createElement('img');
      imgProducto.setAttribute('src', product.img);
      imgProducto.setAttribute('alt', 'producto');
      figuraProducto.appendChild(imgProducto);
  
      const articuloInfoProducto = document.createElement('article');
      articuloInfoProducto.classList.add('info-product');
  
      const h2TituloProducto = document.createElement('h2');
      h2TituloProducto.textContent = product.title;
  
      const pPrecioProducto = document.createElement('p');
      pPrecioProducto.classList.add('price');
      pPrecioProducto.textContent = product.price;
  
      const botonAddCarrito = document.createElement('button');
      botonAddCarrito.classList.add('btn-add-cart');
      if (product.id) botonAddCarrito.id = product.id;
      botonAddCarrito.textContent = 'Añadir al carrito';
  
      articuloInfoProducto.appendChild(h2TituloProducto);
      articuloInfoProducto.appendChild(pPrecioProducto);
      articuloInfoProducto.appendChild(botonAddCarrito);
  
      itemProducto.appendChild(figuraProducto);
      itemProducto.appendChild(articuloInfoProducto);
  
      contenedorPrincipal.appendChild(itemProducto);
    });
  
    document.body.appendChild(contenedorPrincipal);
  
    // Lógica de manipulación del DOM
    const btnCarrito = document.querySelector('.container-cart-icon');
    const contenedorProductosCarritoEl = document.querySelector('.container-cart-products');
  
    btnCarrito.addEventListener('click', () => {
      contenedorProductosCarritoEl.classList.toggle('hidden-cart');
    });
  
    const infoCarrito = document.querySelector('.cart-product');
    const seccionProductosCarritoEl = document.querySelector('.row-product');
  
    // Lista de todos los contenedores de productos
    const listaProductos = document.querySelector('.container-items');
  
    // Variable de arreglos de Productos
    let todosProductos = [];
  
    const totalPagar = document.querySelector('.total-pagar');
  
    const contadorProductos = document.querySelector('#contador-productos');
  
    const carritoVacio = document.querySelector('.cart-empty');
    const totalCarrito = document.querySelector('.cart-total');
  
    listaProductos.addEventListener('click', e => {
      if (e.target.classList.contains('btn-add-cart')) {
        const producto = e.target.parentElement;
  
        const infoProducto = {
          cantidad: 1,
          titulo: producto.querySelector('h2').textContent,
          precio: producto.querySelector('p').textContent,
        };
  
        const existe = todosProductos.some(
          producto => producto.titulo === infoProducto.titulo
        );
  
        if (existe) {
          const productos = todosProductos.map(producto => {
            if (producto.titulo === infoProducto.titulo) {
              producto.cantidad++;
              return producto;
            } else {
              return producto;
            }
          });
          todosProductos = [...productos];
        } else {
          todosProductos = [...todosProductos, infoProducto];
        }
  
        mostrarHTML();
      }
    });
  
    seccionProductosCarritoEl.addEventListener('click', e => {
      if (e.target.classList.contains('icon-close')) {
        const producto = e.target.parentElement;
        const titulo = producto.querySelector('p').textContent;
  
        todosProductos = todosProductos.filter(
          producto => producto.titulo !== titulo
        );
  
        mostrarHTML();
      }
    });
  
    // Función para mostrar HTML
    const mostrarHTML = () => {
      if (!todosProductos.length) {
        carritoVacio.classList.remove('hidden');
        seccionProductosCarritoEl.classList.add('hidden');
        totalCarrito.classList.add('hidden');
      } else {
        carritoVacio.classList.add('hidden');
        seccionProductosCarritoEl.classList.remove('hidden');
        totalCarrito.classList.remove('hidden');
      }
  
      // Limpiar HTML
      seccionProductosCarritoEl.innerHTML = '';
  
      let total = 0;
      let totalDeProductos = 0;
  
      todosProductos.forEach(producto => {
        const contenedorProducto = document.createElement('article');
        contenedorProducto.classList.add('cart-product');
  
        contenedorProducto.innerHTML = `
          <section class="info-cart-product">
            <span class="cantidad-producto-carrito">${producto.cantidad}</span>
            <p class="titulo-producto-carrito">${producto.titulo}</p>
            <span class="precio-producto-carrito">${producto.precio}</span>
          </section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        `;
  
        seccionProductosCarritoEl.append(contenedorProducto);
  
        total = total + parseFloat(producto.cantidad * producto.precio.slice(1));
        totalDeProductos = totalDeProductos + producto.cantidad;
      });
  
      totalPagar.innerText = `$${total}.000`;
      contadorProductos.innerText = totalDeProductos;
    };
  });
  