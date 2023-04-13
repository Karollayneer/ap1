import express from 'express'
//Importações//

//instanciando o servidor
const app = express();

//configurando o servidor para receber requisições:
app.use(express.json())

//imporando os controllers
import usuarioController from './controllers/usuarioController.js';
import tarefaController from './controllers/tarefaController.js';

usuarioController.rotas(app)
tarefaController.rotas(app)

export default app