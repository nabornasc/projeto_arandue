// document.getElementById("tituloBanner"); 
// busca pelo atributo id="tituloBanner" (você já tem isso no seu h1!)

// document.querySelector(".footer-bottom p");
// busca pelo seletor CSS (classe, tag, etc) — pega só o PRIMEIRO que encontrar

// document.querySelectorAll(".caixa-produto");
// igual o de cima, mas pega TODOS que encontrar (retorna uma lista)

window.addEventListener("load", function() {
    alert('Página carregada com sucesso!');
});


const seletorCor = document.getElementById("seletor-cor"); // busca pelo input com id="seletor-cor"

seletorCor.addEventListener("input", function() {
    // quando o usuário muda a cor no seletor, essa função é executada
    // pega o valor da cor selecionada e aplica como background do body

    document.body.style.backgroundColor = seletorCor.value; 
    // aplica a cor selecionada como background do body
    // console.log(seletorCor.value); // mostra no console o valor da cor selecionada
});
