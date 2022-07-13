class Persona{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre  = nombre;
        this.apellido  = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
       console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascota(String){
        this.mascotas.push(String);
    }
    countMascotas(){
        console.log(this.mascotas.length);
    }
    addBook(nomLibro,nomAutor){
        this.libros.push({nombre:`${nomLibro}`, autor:`${nomAutor}`});
        //agragar  un objeto  nombre:string , autor:string al array de libros
    }
    getBookNames() {
        this.libros.forEach((i) => {
           console.log(i.nombre);
        });    
    }
}

const persona1 = new Persona("persona1","apellido1",[{nombre:"libro1",autor:"autor1"}],["caballo"]);
persona1.getFullName();
persona1.addMascota("gallina");
persona1.countMascotas();
persona1.addBook("libro2","autor2");
persona1.getBookNames()
