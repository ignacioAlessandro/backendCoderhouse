
const { promises: fs } = require('fs');
const { arch } = require('os');


class Contenedor {
    constructor(ruta){
        this.ruta = ruta;
    }

    
    async save(obj){
        const products = await this.getAll();
        let archivos = await products.archivos
        const idArchivos = await archivos.map(x=>x.id)
        const maxId = await Math.max(...idArchivos)
        if (maxId>=1){
            obj.id = await maxId+1; 
            archivos.push(obj)
            const arrayId =await archivos.map((x,i)=>x.arrayposition = i)
            const nuevaLista = await JSON.stringify(products)
            const productSave = await fs.writeFile(this.ruta, nuevaLista)
            console.log(nuevaLista)
            return obj.id
        }else{  
            obj.id = await 1;
            archivos.push(obj)
            const nuevaLista = await JSON.stringify(products)
            const productSave = await fs.writeFile(this.ruta, nuevaLista)
            console.log(nuevaLista)
            return obj.id
        }
        
            
    }
    
    async getById(id){
        const products = await this.getAll();
        let productById = await products.archivos.find(p => p.id == id)
        console.log(productById)
        return productById;  
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

    async deleteById(idParam){
        const products = await this.getAll();
        const archivoos = await products.archivos
        const productById = products.archivos.find(p => p.id == idParam)
        const productFnal = productById.arrayposition
        archivoos.splice(productFnal, 1)
        const nuevaLista = await JSON.stringify(products)
        await fs.writeFile(this.ruta, nuevaLista)
        console.log(nuevaLista)
    }

    async deleteAll(){
        const products = await this.getAll();
        let archivos = await products.archivos
        await archivos.splice(0)
        const nuevaLista = await JSON.stringify(products)
        await fs.writeFile(this.ruta, nuevaLista)
        console.log(nuevaLista)
    }
}


module.exports = Contenedor;
