document.addEventListener("DOMContentLoaded", function() {
    loadAthletesM('masculino');

});
function loadAthletesM(endpoint) {
    const apiUrl = `https://botafogo-atletas.mange.li/${endpoint}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => renderAthletes(data))
        .catch(error => console.error('Erro ao obter dados:', error));
}

function renderAthletes(athletesData) {
    const athletesContainer = document.getElementById('athletes-containerM');
    athletesContainer.innerHTML = '';

    athletesData.forEach(athlete => {
        const card = document.createElement('div');
        card.className = 'athlete-card';
        card.innerHTML = `<img src="${athlete.imagem}"></img>
                          <p>${athlete.nome}</p>
                          <button class="sobre"onclick="showAthleteDetails(${athlete.id})">Sobre</button>`;
        athletesContainer.appendChild(card);
    });
}




function showAthleteDetails(athleteId) {
    const apiUrl = `https://botafogo-atletas.mange.li/${athleteId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => renderAthleteDetails(data))
        .catch(error => console.error('Erro ao obter dados:', error));
}
function renderAthleteDetails(detailsData) {
    const detailsContainer = document.getElementById('athletes-containerM');
    detailsContainer.innerHTML = `<div class="details-card">
                                    <h2>Detalhes do Atleta</h2>
                                    <img src="${detailsData.imagem}"> </img>   
                                    <p>${detailsData.nome}</p>
                                    <p>${detailsData.posicao}</p>
                                    <p>${detailsData.descricao}</p>
                                    <p>Nome completo: ${detailsData.nome_completo}</p>
                                    <p>Nascimento: ${detailsData.nascimento} </p>
                                    <p>Altura: ${detailsData.altura} </p>

                                </div>`;
}


function logout() {
    // Lógica de logout (pode ser mais elaborada dependendo da autenticação)
    localStorage.setItem('authenticated', 'false');
    alert('Logout realizado com sucesso');
    window.location.href = 'login.html';  // Redireciona para a página inicial após o logout
}