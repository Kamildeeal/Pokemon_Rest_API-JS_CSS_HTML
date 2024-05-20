document.addEventListener('DOMContentLoaded', async function () {
  const params = new URLSearchParams(window.location.search);
  const pokemonName = params.get('name');

  const pokemonImage = document.getElementById('pokemonImage');
  const pokemonNameElement = document.getElementById('pokemonName');
  const pokemonAbilities = document.getElementById('pokemonAbilities');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const goToListButton = document.getElementById('goToListButton');

  async function showPokemonData(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();

      pokemonImage.src = data.sprites.front_default;
      pokemonNameElement.textContent = `Name: ${data.name}`;

      const abilities = data.abilities.map(ability => ability.ability.name);
      pokemonAbilities.textContent = `Abilities: ${abilities.join(', ')}`;

      // Fetch the next Pokemon details
      const nextResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`);
      const nextData = await nextResponse.json();

      nextButton.addEventListener('click', () => {
        window.location.href = `details.html?name=${nextData.name}`;
      });

    } catch (error) {
      console.log(error);
    }
  }

  await showPokemonData(pokemonName);

  prevButton.addEventListener('click', () => {
    history.back();
  });

  goToListButton.addEventListener('click', () => {
      window.location.href = 'index.html'
  })
});