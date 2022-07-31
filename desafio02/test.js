const Contenedor = require('./desafio02');

async function main(){
    
    
    const  ejemp01={
        id:2,
        texto: "descripcion texto",
        numero : 1,
}
    
    const product = new Contenedor('./productos.txt');
    await product.getAll()
    await product.save(ejemp01);
    await product.save(ejemp01);
    await product.getById(2)
    await product.deleteById(1)
    await product.getAll()
    await product.deleteAll()
   
}

main();


