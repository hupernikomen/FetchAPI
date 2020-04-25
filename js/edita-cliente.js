
const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputCfp = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then((dadosCliente) => {
   inputCfp.value = dadosCliente[0].cpf;
   inputNome.value = dadosCliente[0].nome;
});

const formEdita = document.querySelector('[data-form]');

formEdita.addEventListener('submit', (event) => {
   event.preventDefault();

   const cpf = event.target.querySelector('[data-cpf]');
   const nome = event.target.querySelector('[data-nome]');

   editaCliente(id, cpf.value, nome.value);
})