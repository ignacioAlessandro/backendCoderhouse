const {promises: fs} = require('fs');

class Contenedor {
    constructor(ruta){
        this.ruta = rata;
    }

    async save(obj){
        
    }

    async getById(id){
        const products = await this.getAll();
        const productById = products.find(p=>p.id == id);
        return productById;
    }

    async getAll(){
        try{
            const products = await FileSystem.readFile(this.ruta, 'utf-8');
            return JSON.parse(products)
        }catch(error){
            return[];
        }
    }

    async deleteById(id){
        
    }

    async deleteAll(){
        
    }
}

module.exports = Contenedor;