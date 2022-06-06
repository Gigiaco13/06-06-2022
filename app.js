const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta
//const index = require('./routes/index')(app)
const consign= require("consign")
consign().include("./routes").into(app)

app.listen(porta, ()=>{
    console.log('http://localhost:' + porta)
})
