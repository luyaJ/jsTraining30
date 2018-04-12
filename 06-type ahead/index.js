let cities = [];

fetch(dataURL)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const reg = new RegExp(wordToMatch, 'gi');
    return place.city.match(reg) || place.state.match(reg);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const reg = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(reg, `<span class="h1">${this.value}</span>`);
    const stateName = place.state.replace(reg, `<span class="h1">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${place.state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);