
// pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

// pegar o elemento da imagem do botao
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")

//dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click",() => {
  // verificar se o body ja tem a class modo-claro
  const modoEscuroEstaAtivo = body.classList.contains("modo-claro") 
  
 //trocar entre o modo escuro e claro
  body.classList.toggle("modo-claro")

  if (modoEscuroEstaAtivo){
 // trocar a imagem do botão de alterar tema pra lua
   imagemBotaoTrocarDeTema.setAttribute("src", "./src/img/moon.png")
  }
  else{
 // trocar a imagem do botão de alterar tema pra sol
  imagemBotaoTrocarDeTema.setAttribute("src", "./src/img/sun.png")
  }
  
})