import btnCreatePassword from './formCreatePassword'

//Texto da senha p/ ser alterado
const textoSenhaGerada = document.querySelector('.senha-gerada');




//Função para gerar numeros aleatorios
function random(min, max) {
    return String(Math.random() * (max - min) + min);
}

//Função para gerar a senha do usuário conforme os dados recebidos da formCreatePassword
export default function geraSenha(charLimit, chkboxUpper, chkboxLower,
    chkboxNumber, chkboxSymbol) {

    let simbolos = '.;,/!@#$%&*()-_='

    let textoSenha = String('');

    //Array da senha gerada
    let senhaGerada = [];

    //Tratativa para valor acima ou abaixo do esperado para gerar senhas
    if(charLimit <= 0 || charLimit > 30)
    {return alert('Character Limit Invalid')}
    

    //Repetição para gerar senhas conforme true ou false das checkboxes
    for (let count = 0; count < charLimit; count++) {
        if (chkboxUpper === true) {
            textoSenha = String.fromCharCode(random(65, 91));
            senhaGerada.push(textoSenha);
        }
        if (chkboxLower === true) {
            textoSenha = String.fromCharCode(random(97, 123));
            senhaGerada.push(textoSenha);
        }
        if (chkboxNumber === true) {
            textoSenha = String.fromCharCode(random(48, 58));
            senhaGerada.push(textoSenha);
        }

        if (chkboxSymbol === true) {
            textoSenha = String(simbolos.charAt(random(1, simbolos.length)));
            senhaGerada.push(textoSenha);
        }
        //Tratativa caso usuário não tenha escolhido nenhuma opção
        if(chkboxUpper === false && chkboxLower === false && chkboxNumber === false && chkboxSymbol === false){
            return alert('Selecione ao menos uma opção abaixo')
            
        }
    }
    //Junção dos caracteres criados aleatoriamente e separação para encaixar na tela conforme o numero de caracteres escolhidos
    textoSenhaGerada.innerHTML = senhaGerada.join('').slice(0, charLimit);
}


