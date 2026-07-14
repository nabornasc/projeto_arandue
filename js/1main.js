const menuPrincipal = document.getElementById("menuPrincipal");
const botaoHamburguer = document.getElementById("botaoHamburguer");
const menuLateral = document.getElementById("menuLateral");
const overlay = document.getElementById("overlay");
const fecharMenu = document.getElementById("fecharMenu");

const LIMITE_SCROLL = 100; // Limite de rolagem em pixels

function fecharMenuLateral() {
  menuLateral.classList.remove("aberto");
  overlay.classList.remove("ativo");
}

window.addEventListener("scroll", function () {
  if (window.scrollY > LIMITE_SCROLL) {
    menuPrincipal.classList.add("recolhido");
    botaoHamburguer.classList.add("visivel");
  } else {
    menuPrincipal.classList.remove("recolhido");
    botaoHamburguer.classList.remove("visivel");
    fecharMenuLateral();
  }
});

botaoHamburguer.addEventListener("click", function () {
  menuLateral.classList.toggle("aberto");
  overlay.classList.toggle("ativo");
});

overlay.addEventListener("click", fecharMenuLateral);

if (fecharMenu) {
  fecharMenu.addEventListener("click", fecharMenuLateral);
}

let botao = document.getElementById("meuBotao");

if (botao) {
  botao.addEventListener("click", function () {
    alert("Parabens! Você construiu sua primeira pagina!");
  });
}
