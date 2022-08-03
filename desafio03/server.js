const Contenedor = require('./pedidos');
//asi se hace con expres
const express = require('express')
// let vistas = 0
const app = express();
const product = new Contenedor('./productos.txt');
const traerTodo = product.getAll()

const traerUno = ()=>{
    random = product.randomProduct()
    random
}
app.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue;"> hola mundo</h1>`);
})
app.get('/productos',(req,res)=>{
    res.send(
        console.log(traerTodo)
    );
})
app.get('/productoRandom',(req,res)=>{
    res.send(
        traerUno()
    );
})
const server = app.listen(8080, ()=>{
    console.log('hola')
})