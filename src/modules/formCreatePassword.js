//Import da função para gerar senha
import geraSenha from './passgen'


//Query Selector das opções do index.html para variaveis JS
const charLimit = document.querySelector(".char-limit");
const chkboxUpper = document.querySelector(".chkbox-upper");
const chkboxLower = document.querySelector(".chkbox-lower");
const chkboxNumber = document.querySelector(".chkbox-number");
const chkboxSymbol = document.querySelector(".chkbox-symbol");
const btnCreatePassword = document.querySelector('.btn-create-password');

//Evento para quando o botão for clicado
export default btnCreatePassword.addEventListener('click', function(e){
    
    //Envio dos dados do usuário para o modulo passgen (Password Generator)
    geraSenha(charLimit.value,
                chkboxUpper.checked,
                chkboxLower.checked,
                chkboxNumber.checked,
                chkboxSymbol.checked);

});

 