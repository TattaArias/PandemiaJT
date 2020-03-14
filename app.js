const express = require ('express');
const appServer = express();
const pandemia = require ('./servicio');
const pais = require ('./pais');
//---------------------------------------------------------------------------------------------------------
appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
   });
//Middleware, este debe estar antes de todas las rutas
appServer.use(express.json());
//Consultar Conexión exitosa
appServer.get ('/', (req, res) => {
    res.send ('HELLO WORLD WITH EXPRESS!!!');
    });
//---------------------------------------------------------------------------------------------------------
//Consultar pandemia
appServer.get ('/pandemia', (req, res)=>{
        res.json (pandemia);
});
//ingresar pandemia
appServer.post ('/add-pandemia' , (req, res)=>{
    const usuario = req.body;
    pandemia.push(usuario);
    res.send ('POST USER ADDED');
});
//eliminar pandemia
appServer.post ('/delete-pandemia/:idUser' , (req, res)=>{
    pandemia.splice(req.params.idUser,1);
    res.send ('THIS IS A DELETE REQUEST');
});
//editar pandemia
appServer.post ('/update-pandemia/:idUser' , (req, res)=>{
    pandemia.splice(req.params.idUser,1);
    const usuario = req.body;
    pandemia.push(usuario);
    res.send ('USER UPDATED');
});
//consultar
appServer.get('/consultar-pandemia-id/:idUser', (req, res)=>{
    bandera = new Boolean(true) ;
    i = 0 ;

    while(bandera){
        if(pandemia[i].id ==  req.params.idUser){
            res.send (pandemia[req.params.idUser].id + " - " + pandemia[req.params.idUser].nombreDelVirus + " - " + pandemia[req.params.idUser].sintomas);
            bandera = false ;
            console.log(bandera);
        }else{
            console.log("a. " + i);
            i = i + 1 ;
            console.log("a. " + i);
            bandera = true ;
        }
    }
});
//---------------------------------------------------------------------------------------------------------
//Consultar de paises
appServer.get ('/pais', (req, res)=>{
    res.json (pais);
});
//ingresar pais
appServer.post ('/add-pais' , (req, res)=>{
    const usuario = req.body;
    pais.push(usuario);
    res.send ('POST USER ADDED');
});
//eliminar pais
appServer.post ('/delete-pandemia/:idUser' , (req, res)=>{
    pais.splice(req.params.idUser,1);
    res.send ('THIS IS A DELETE REQUEST');
});
//editar pais
appServer.post ('/update-pais/:idUser' , (req, res)=>{
    pais.splice(req.params.idUser,1);
    const usuario = req.body;
    pais.push(usuario);
    res.send ('USER UPDATED');
});
//---------------------------------------------------------------------------------------------------------

