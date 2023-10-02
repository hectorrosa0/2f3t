mensagem = (msg) => alert (msg);

soma = (a,b) => a+b;
sub = (a,b) => a-b;
mult = (a,b) => a*b;
div = (a,b) => a/b;
raiz = x => Math.sqrt(x);

let a = ' ';
let b = " ";
let valor = "";
let temPonto = false;

function escreva_display(num){
  document.getElementById("resultado").value =num;

}

function digitando (tecla){
  valor +=tecla;
escreva_display(false)

}
