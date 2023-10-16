var primeira = 12;
let segunda = "casa";
const terceira = ["casa", "banana", 2];
let quarta;

console.log(++primeira + ": primeira");
console.log(segunda + ": Segunda");
segunda += " amarela";
console.log(segunda + ": Segunda");
console.log(quarta + ": A variável começa com esse valor")
console.log(terceira);
//terceira = 65;
//console.log(terceira);

terceira[15] = "15";
console.log("terceira[10]" + terceira[10]);
console.log("tamanho: " + terceira.length);

quarta = {
    primeira: 1,
    segunda: "tudo"
}

console.log("quarta: " + quarta)
console.log("quarta.primeira: " + quarta.primeira);
quarta.terceira = "nada"
console.log("quarta.terceira: " + quarta.terceira);

function minha_funcao(entrada){
  return entrada + 2;
}

console.log(minha_funcao(2))

const minha_outra_func = function (entrada){ //função anônima
  return entrada+3;
}


console.log(minha_outra_func(2))

const setinha = (entrada) => { //ArrowFunction
  return entrada + 4;
}

console.log(setinha(5));
console.log(setinha(1));

const contra_setinha = (entrada) => entrada+5; //função inteira
console.log(setinha(6));
console.log(setinha(2));