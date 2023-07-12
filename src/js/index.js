/*    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande*/

// Objetivo 1
//Passo - 1
const personagens = document.querySelectorAll('.personagem')

//Passo - 2
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        /* isso aqui é para testar com o celular
        
        if(window.innerWidth < 450) {
            window.scrollto({top: 0, behavior: 'smooth'});
        }
        
        */

//Passo - 3 *Exemplo da função de FATORAR a o CODIGO clicar no nome e apretar F12
        removerSelecaoDoPersonagem();

personagem.classList.add('selecionado');

//Obejetivo 2
// Passo 1
const imagemPersonagemGrande = document.querySelector('.personagem-grande');
// Passo 2
const idpersonagem = personagem.attributes.id.value;
imagemPersonagemGrande.src = `./src/imagens/card-${idpersonagem}.png`;

// Passo 3
const nomePersonagem = document.getElementById('nome-personagem');
nomePersonagem.innerText = personagem.getAttribute('data-name');

   //Passo 4
const descricaoPersonagem = document.getElementById('descricao-personagem');
descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})


function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

