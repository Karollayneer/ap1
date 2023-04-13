import Usuario from "../models/usuario.js"
import Tarefa from "../models/tarefa.js"

const bdUsuarios = []
const bdTarefas = []

const usuario = new Usuario("Pedro Nicacio", "pnicacio@gmail.com", "26xxxxxx")
bdUsuarios.push(usuario);

const usuario2 = new Usuario("Roberto dos Santos", "intelijeg@gmail.com", "01xxxxxx")
bdUsuarios.push(usuario2);

const tarefa = new Tarefa("jogos vorazes", "legal", "completo", new Date());
bdTarefas.push(tarefa)

const tarefa2 = new Tarefa("Harry Potter", "horrivel", "incompleto", new Date());
bdTarefas.push(tarefa2)

export { bdTarefas, bdUsuarios }