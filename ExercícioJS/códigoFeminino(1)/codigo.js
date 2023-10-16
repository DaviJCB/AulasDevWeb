
const ingrid = atletas[0];

window.onload = () => { 
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
    };
    
    preenche(atletas[1])
};

