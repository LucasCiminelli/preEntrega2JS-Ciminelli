//array de base de datos de los productos como objetos.

const productos = [
  { id: 1, nombre: "Remera", precio: 3000 },
  { id: 2, nombre: "Pantalon", precio: 3500 },
  { id: 3, nombre: "Short", precio: 4500 },
  { id: 4, nombre: "Medias", precio: 1000 },
  { id: 5, nombre: "Muñequeras", precio: 800 },
  { id: 6, nombre: "Rodilleras", precio: 4000 },
  { id: 7, nombre: "Zapatillas", precio: 35000 },
];

//carrito inicializado como un array vacio.

let carrito = [];

// Función para agregar un producto al array carrito.
// El usuario ingresa un numero que conicide con el ID del producto en la base de datos.
// Si lo encuentra lo agrega al carrito.
// con let continuar le doy al usuario la opcion de continuar comprando o interrumpir el ciclo.
// cuando se interrumpe el ciclo, con un reduce se calcula el total y se muestra en pantalla y en consola.

function agregarProducto() {
  while (true) {
    const pregunta = Number(
      prompt(`Ingrese el ID del producto que desea agregar a su carrito:
          ID 1 - Remera
          ID 2 - Pantalon
          ID 3 - Short
          ID 4 - Medias
          ID 5 - Muñequeras
          ID 6 - Rodilleras
          ID 7 - Zapatillas
          `)
    );

    const producto = productos.find((producto) => producto.id === pregunta);

    if (producto) {
      carrito.push(producto);
      console.log("Producto agregado al carrito:", producto.nombre);
      alert(`¡${producto.nombre} agregado correctamente al carrito!`);
    } else {
      alert("Ingrese un número válido");
    }
    console.log("Carrito actual:", carrito);

    let continuar = confirm("¿Desea agregar otro producto al carrito? ");
    if (!continuar) {
      break;
    }
  }
  let sumarTotal = carrito.reduce((acc, productos) => {
    return acc + productos.precio;
  }, 0);
  console.log(`El total de la compra es: $ ${sumarTotal}`);
  alert(`El total de la compra es: $ ${sumarTotal}`);
}
