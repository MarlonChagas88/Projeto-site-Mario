let formulario = document.querySelector(".fale-conosco");
let mascara = document.querySelector(".mascara-form");
let img = document.querySelector(".imagem-mario-luigi");
let input = document.querySelector(".inp");
let input1 = document.querySelector(".inp_1");

function cliqueiNoBotao() {
  formulario.style.left = "700px";
  mascara.style.visibility = "visible";
}

function sumirFormulario() {
  formulario.style.left = "-320px";
  mascara.style.visibility = "hidden";

  let form = input.value;
  let form1 = input1.value;
  console.log(form);
  console.log(form1);
}
