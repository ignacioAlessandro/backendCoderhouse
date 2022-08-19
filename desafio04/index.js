const express = require('express');
const {Router}= express;

const app =  express();
app.use(express.json());
// app.use(express.urlencoded({  extended: true}));


app.get('/api/mensajes', (req, res) =>{
    console.log(`HTTP GET`);
    res.json({msg:`HOLA MUNDO`})
})

app.get(`/api/mensajes-query-params`, (req,res)=>{
    console.log(`Get con query params`);
    if (Object.entries(req.query).length>0) {
        res.json({
            result: 'get  with query params: ok',
            query:req.query
        })
        
    }else{
        res.json({
            result:'get all:ok'
        })
    }
})

app.get(`/api/mensajes/:id`, (req,res)=>{
    res.json({
        resul:'recurso buscado',
        pathParam: req.params.id
    })
});

app.post('/api/mensajes', (req, res)=>{
    res.json(req.body);
})






app.listen(8080);