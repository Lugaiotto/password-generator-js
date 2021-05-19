
const savePassword = document.querySelector('.btn-save-password');
const createdPassword = document.querySelector('.senha-gerada')
const savedPasswords = document.querySelector('.saved-passwords')
const errorMessage = document.querySelector('.error-message')


//Event listener do botão Save Password
export default savePassword.addEventListener('click', function (e) {   
    insertPassword(createdPassword.innerText);   
})


//Função que insere o resultado da senha gerada em uma li
function insertPassword(senha) {
    const linha = criaLi();
    //Criação de classe para remoção caso necessário
    linha.classList.add('li-senha');   
    linha.innerText = senha;
    savedPasswords.appendChild(linha)
    //Tratativa para zerar o texto
    errorMessage.innerText = '';   
}

//Função para criar linha
function criaLi() {
    const li = document.createElement('li');
    return li
}

