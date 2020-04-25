const form = document.querySelector('[data-form]');

form.addEventListener('submit', event => {
   event.preventDefault();

   const cpf = event.target.querySelector('[data-cpf]');
   const nome = event.target.querySelector('[data-nome]');

   criarCliente(nome.value, cpf.value);

})