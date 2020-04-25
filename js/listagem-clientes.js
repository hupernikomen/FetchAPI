
const corpoTabela = document.querySelector('[data-conteudo-tabela]')

const exibeCliente = (cpf, nome, id) => {
   const linha = document.createElement('tr');
   const conteudoLinha =
      `
         <td>${cpf}</td>
         <td>${nome}</td>
         <button class='btn btn-danger' type='button' onclick='excluirCliente(${id})'>Excluir</button>
         <a href='edita-clientes.html?id=${id}'><button class='btn btn-info'>Editar</button></a>
      `
   linha.innerHTML = conteudoLinha;
   return linha
}


exibeClientes().then((item) => {

   item.forEach((index) => {
      corpoTabela.appendChild( exibeCliente(index.cpf, index.nome, index.id));
   })
})