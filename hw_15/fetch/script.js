window.onload = function() {
    document.getElementById('fetchButton').addEventListener('click', fetchPlanetInfo);
}

function fetchPlanetInfo() {
    fetch('https://swapi.dev/api/planets/1/')
    .then(response => response.json())
    .then(data => {
        const planetInfo = document.getElementById('planetInfo');
        const planetName = data.name;
        const planetClimate = data.climate;
        const planetTerrain = data.terrain;
        const planetPopulation = data.population;
        const planetResidents = data.residents;

        let residentsList = '';
        if (planetResidents.length > 0) {
            residentsList = '<ul>';
            planetResidents.forEach(resident => {
                residentsList += `<li><a href="${resident}">${resident}</a></li>`;
            });
            residentsList += '</ul>';
        } else {
            residentsList = 'Немає жителів';
        }

        const planetCard = `
            <div>
                <h2>${planetName}</h2>
                <p><strong>Клімат:</strong> ${planetClimate}</p>
                <p><strong>Місцевість:</strong> ${planetTerrain}</p>
                <p><strong>Населення:</strong> ${planetPopulation}</p>
                <p><strong>Жителі:</strong> ${residentsList}</p>
            </div>
        `;

        planetInfo.innerHTML = planetCard;
    })
    .catch(error => {
        console.error('Виникла помилка:', error);
    });
}