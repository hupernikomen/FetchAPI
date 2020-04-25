
const exibeClientes = () => {

   return fetch('http://localhost:4000/clientes')
   .then((resposta) => {
      return resposta.json()
   })
   .then((cliente) => {
      return cliente
   })
}


const criarCliente = (nome, cpf) => {
   
   return fetch('http://localhost:4000/clientes/cliente', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
         nome,
         cpf, 
      })
   })
   .then( json => {
      console.log(json.body)
      return json.body
   })
}

const excluirCliente = (id) => {
   return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
      method: 'DELETE'
   })
}

const detalhaCliente = (id) => {
   return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
      method: 'GET'
   })
   .then((resposta) => {
      return resposta.json()
   })
}

const editaCliente = (id, cpf, nome) => {
   return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
         cpf,
         nome
      })
   })
}