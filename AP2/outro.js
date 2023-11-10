
const params = new URLSearchParams(window.location.search);
const atleta_id = params.get('id');
const URL = `https://botafogo-atletas.mange.li/${atleta_id}`;

async function fetchData() {
  try {
    const carreg = document.getElementById('Carregando');
    carreg.style.visibility = 'visible';

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error('Erro na solicitação da API');
    }

    const infos = await response.json();
    console.log(infos);
    carreg.style.visibility = 'hidden';

    const atleta_id = document.getElementById('id').innerHTML = params.get('id');
    const img = document.getElementById('imagem').src = infos.imagem;
    const descricao= document.getElementById('descricao').innerHTML = infos.descricao;
  

  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', fetchData);
