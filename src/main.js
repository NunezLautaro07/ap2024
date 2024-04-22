import express from 'express';
import bodyParser from 'body-parser';
const app = express ();
const puerto = 3000;
app.use(bodyParser.json());
let data = [
    { id: 1, name: 'Objeto 1'},
    { id:2, name: 'Objeto 2'},
    ];
app.get ('/data'  , (req, res) => {
    res.json(data);
    });
app.get('/', (req, res) => {
res.send ('Hola, mundo con Express!');
});
app.post ('/data', (req, res) => {
    const nuevoDato = req.body;
    nuevoDato.id = data.length + 1;
    data.push(nuevoDato);
    res.json(nuevoDato);
    });
    app.delete('/data/:id', (req, res) => {
        const id = parseInt(req.params.id);
        data = data.filter((item) => item.id !== id);
        res.json ({ mensaje: 'Dato eliminado exitosamente' });
        });


//Iniciar el servidor
app.listen(puerto, () => {
console.log(`Servidor en funcionamiento en el puerto ${puerto}`);
});