/* 

https://www.youtube.com/watch?v=we5Ac8U21lI


1. Faz uma solicitação HTTP e obtém uma Promise
const resposta = fetch("https://botafogo-atletas.mange.li/");

// 2. Define uma função assíncrona que recebe a resposta da Promise e imprime o conteúdo no console
const espera = async (entrada) => {
    const texto = await entrada.json(); // json interpreta objeto textos
    console.log(texto);
}

// 3. Quando a Promise da solicitação HTTP é resolvida, chama a função 'espera' com a resposta
promessa.then((resposta) => espera(resposta));

// 4. Imprime 'síncrono' no console imediatamente
console.log('síncrono');

*/

const url = "https://botafogo-atletas.mange.li/";
const numero_jogador = 36;

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_json(url).then((r) => console.log(r));

pega_json(`${url}/${numero_jogador}`).then((r) => console.log(r));

console.log('sincrono');
