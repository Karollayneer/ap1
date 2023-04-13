import Usuario from "../models/usuario.js"
import { bdUsuarios } from "../infra/bd.js"

class usuarioController {

  static rotas(app){
    // Rota para o recurso usuario
    app.get('/usuario', usuarioController.listar)
    app.post('/usuario', usuarioController.inserir)
    app.post("/usuario/:email", usuarioController.filtrarPorEmail)
    app.delete("/usuario/:email", usuarioController.apagarUsuario)
    app.put("/usuario/:email", usuarioController.utilizarUsuario)

  }
 
    static listar(req,res){
      const usuarios = bdUsuarios
      //Devolve a lista de usuarios
      res.send(usuarios)
    }

    static inserir(req,res){
      res.send('Rota ativada com Post e recurso usuario: Usuario de ve ser inserido')
      console.log(req.body)
    }
  
    static filtrarPorEmail(req, res){
      const usuario = bdUsuarios.filter((usuario) => usuario.email === req.params.email)
      res.send(usuario.nome)
      console.log(usuario)
      }
    
      //Aula de Hoje//
     
    static apagarUsuario (req,res){
      let index;
      const [usuario] = bdUsuarios.filter((usuario, i) => {
        if(usuario.email === req.params.email){
          index = i;  
        }
        return usuario.email === req.params.email
      }) 
      bdUsuarios.splice(index,1)
      console.log(usuario)
      res.send(`Usuario: ${usuario.nome}, index: ${index}`)


    }

    static utilizarUsuario (req,res){
    
        let index;
        const [usuario] = bdUsuarios.filter((usuario, i) => {
          if(usuario.email === req.params.email){
            index = i;  
          }
          return usuario.email === req.params.email
        })

       bdUsuarios[index].nome=req.body.nome;
       bdUsuarios[index].email=req.body.email;
       bdUsuarios[index].senha=req.body.senha;
  
        
      console.log(usuario)
      res.send(`Usuario: ${usuario.nome}, index: ${index}`)
    }

}
export default usuarioController 