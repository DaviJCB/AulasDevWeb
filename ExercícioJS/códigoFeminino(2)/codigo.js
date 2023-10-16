
const ingrid = atletas[0];

const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const criar_cartao = (atletas) => {

    const container_atleta = document.createElement('div');
    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;
    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;
    const descricao = document.createElement('p');
    descricao.innerHTML == atleta.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta)
}
    
const espaco_nome = document.getElementById("nome");
const imagem = document.querySelector("div#container > img");
const descricao = document.querySelector("div#container > p");

espaco_nome.innerText = ingrid.nome; 
imagem.src =  ingrid.imagem;
imagem.width = 350;
descricao.innerText = ingrid.descricao;

const preenche = (atleta) => {
    const espaco_nome = document.getElementById("nome");
    const imagem = document.querySelector("div#container > img");
    const descricao = document.querySelector("div#container > p");

    espaco_nome.innerText = atleta.nome; 
    imagem.src =  atleta.imagem;
    imagem.width = 350;
    descricao.innerText = atleta.descricao;
}

atletas.forEach((atleta)=>{criar_cartao(atleta)});