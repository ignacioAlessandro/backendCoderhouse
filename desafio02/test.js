const Contenedor = require('./Contenedor');

async function main(){
    const product = new Contenedor('./productos.txt');

    console.log('Muestra todos los productos');
    let allProducts = await product.getAll();
    console.log(allProducts);

    const idToSearch = 1;
    console.log(`Muestro el producto con id ${idToSearch}`);
    console.log(productById);
}

main();