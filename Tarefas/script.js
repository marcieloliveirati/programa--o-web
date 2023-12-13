//fazendo a seleção dos id para o Js
const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista")



//adicionando evento no botão 
btn.addEventListener("click", function(){
    //se o campo estiver em branco, mensagem de alerta
    if(tarefa.value == ""){
        alert("Digite uma tárefa válida!")
    } else {
        //montando as listas após adicionar
        //inner tem a função de incluir esse código no html, no site.
        // o += significar que quero ir adicionando mais informações
        lista.innerHTML += `<li>
                                <i class="fas fa-check-circle check"></i>
                                <span>${ tarefa.value }</span>
                                <i class="fa-solid fa-trash-can close"></i>
                            </li>`
//o $ ali e a sequencia faz com que pegue o conteúdo digitado seja trago nessa função
    }
    //limpando o campo após a função de adicionar
    tarefa.value = "";
//Esse close abaixo siginifica que estou selecionando a classe close, que está lá no HTML no template
//todos os botões estão sendo selecionados, para receberem um evento de click
    const close = document.querySelectorAll(".close");
    //percorrendo todo o vetor, estamos pegando cada item e adiciona um evento de mouse
    for(let i=0; i<close.length; i++){
        //ao clicar dispara uma função que irá fazer alguma coisa
        close[i].addEventListener("click", function(){
            //Disparado, a linha a baixo tem a função de remover o item clicado
            close[i].parentElement.remove()
        });
    }

    //manipulando o css da pagina
    lista.addEventListener("click", function(e){
        e.target.parentElement.querySelector(".check").style.color = "#649223";
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through"
    });
})
