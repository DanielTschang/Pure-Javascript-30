const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data))
  .catch(error => console.log('error', error));



function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //here we need to figure out if the city on state matches what was earched
        const regex = new RegExp(wordToMatch, 'gi');
        
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches(){
    if(this.value===""){
        suggestions.innerHTML = "<li>Filter for a city or a state</li>"
        return 0;
    }
    const matchArray = findMatches(this.value, cities)

    const html = matchArray.map(place =>{
        const regex = new RegExp(this.value, 'gi');

        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `
    }).join('');

    

    suggestions.innerHTML = html;

    
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change',displayMatches)
searchInput.addEventListener('keyup',displayMatches)