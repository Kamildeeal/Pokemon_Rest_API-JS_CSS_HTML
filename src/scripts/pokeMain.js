const btnHamburger = document.getElementById('btnHamburger');
const overlay = document.getElementById('overlayid');
const mobileMenu = document.getElementById('mobile_menu');
const body = document.querySelector('body')

btnHamburger.addEventListener('click', function() {
    btnHamburger.classList.toggle('open');
    if (btnHamburger.classList.contains('open')) {
        overlay.classList.remove('overlayOut')
        overlay.classList.add('overlay');
        mobileMenu.classList.remove('has-fade');
        body.classList.add('noscroll')
    } else {
        overlay.classList.remove('overlay');
        overlay.classList.add('overlayOut')
        mobileMenu.classList.add('has-fade');
        body.classList.remove('noscroll')
    }
});
 
document.addEventListener('DOMContentLoaded', async function () {
  const pokemonList = document.getElementById('pokemonList');

  async function fetchPokemonData() {
      try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
          const data = await response.json();

          //const pokemonArray = data.results.map(pokemon => pokemon.name);

          //console.log(pokemonArray);

          data.results.forEach(async pokemon => {
              const listItem = document.createElement('li');

              const pokemonContainer = document.createElement('div');
              pokemonContainer.classList.add('pokemon-container');

              const pokemonName = document.createElement('p');
              pokemonName.textContent = pokemon.name;

              pokemonContainer.appendChild(pokemonName);

              const imgItem = document.createElement('img');
              const pokemonResponse = await fetch(pokemon.url);
              const pokemonData = await pokemonResponse.json();
              imgItem.src = pokemonData.sprites.front_default;

              pokemonContainer.appendChild(imgItem);

              listItem.appendChild(pokemonContainer);
              pokemonList.appendChild(listItem);
              
              listItem.addEventListener('click', () => {
                  window.location.href = `details.html?name=${pokemon.name}`;
              });
          });
      } catch (error) {
          console.log(error);
      }
  }

  fetchPokemonData();
});