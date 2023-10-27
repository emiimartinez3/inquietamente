let usuario = prompt("Bienvenido !! Ingresa tu nombre");

function ingresoUsuario () {
    while (usuario == ""){
    alert(`No ingresaste tu nombre`);
    usuario = prompt("Ingresa tu nombre");
    }
    alert(`Bienvenido a Inquietamente Juguetes ${usuario}`);
}

ingresoUsuario();

const productos = [
    {nombre: "camioncito", precio: 2000},
    {nombre: "camara", precio: 1500},
    {nombre: "rompemoster", precio: 2000},
    {nombre: "tateti", precio: 2500},
    {nombre: "jirafa", precio: 2300}
];

let carrito = [];

let seleccion = prompt("Desea comprar alugun producto? Escriba si/no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("Hola!! desea comprar algo ? si o no")
}

if( seleccion == "si"){
    alert("Buenisimo!!! estos son nuestros productos")
    let totalProduct = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(totalProduct.join (" - "))
} else if (seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto!!")
}

while (seleccion != "no"){
    let producto = prompt("agrega un producto al carrito");
    let precio = 0;
    if(producto == "camioncito" || producto == "camara" ||
    producto == "rompemoster" || producto == "tateti" || producto == "jirafa"){
        switch (producto) {
            case "camioncito":
                precio = 2000;
                break;
            case "camara":
                precio = 1500;
                break;
            case "rompemoster":
                precio = 2000;
                break; 
            case "tateti":
                precio = 2500;
                break; 
            case "jirafa":
                precio = 2300;
                break; 
            default:
                break;
        }
        let unidad = parseInt(prompt("Ingresa la cantidad de productos que quiere llevar"))

        carrito.push({producto, unidad, precio})
        console.log(carrito)
    } else {
        alert("Perdon...ese producto no lo tenemos")
    }

    seleccion = prompt("desea seguir comprando??")

    while ( seleccion === "no"){
        alert("gracias por su compra, nos vemos pronto!!!")
        carrito.forEach((carritoFinal) => {
        console.log(`Producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidad},
        total a paggar por producto ${carritoFinal.unidad * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidad, 0)
alert(`el total a pagar por su compra es: ${total}`)

