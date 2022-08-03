const { promises: fs } = require('fs');

class Contenedor {
    constructor(ruta){
        this.ruta = ruta;
    }

    
    async randomProduct(){
        const products = await this.getAll();
        let archivos = await products.archivos
        const randomFuncion = () =>{
            const idArchivos = archivos.map(x=>x.id)
            const maxId = Math.max(...idArchivos)
            let max =  Math.floor(maxId);
            const number =  Math.round(Math.random() * (max - 1 + 1) + 1);
            let productById =   products.archivos.find(p => p.id == number ) 
            return productById; 
        }
        console.log(randomFuncion())
        return randomFuncion();
        
    }
    async getAll(){
            const products = await fs.readFile(this.ruta, 'utf-8');
            try {
                const objJson = await JSON.parse(products);
                return objJson
            } catch (error) {
                return {archivos:[]}
            }
    }
}


module.exports = Contenedor;