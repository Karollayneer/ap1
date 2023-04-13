import app from './app.js'



// Escolhendo a porta em que o servidor irá abrir
const port = 3000


// Abrindo o servidor.
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})


