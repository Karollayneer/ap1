import Tarefa from "../models/tarefa.js"
import { bdTarefas } from "../infra/bd.js"

class tarefaController {
  static rotas (app) {

    app.get('/tarefas',  (req, res) => {
        res.send('Rota ativada com GET e Nodemon')
      })

    app.post('/tarefa', (req,res) => {
      const {titulo, descricao, status, date} = req.body
      const tarefaAInserir = new Tarefa(titulo, descricao, status, date)
      bdTarefas.push(tarefaAInserir)
      const Tarefx = tarefaAInserir;
      console.log(Tarefx)
      res.send(`Rota com Post`)
  })
    }
}

export default tarefaController



