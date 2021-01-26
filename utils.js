import pokemon from './data.js';
import { clearPokeBall, getPokeBall, incrementCaught, incrementSeen } from './localStorageUtils.js';

let numberOfTurns = 0;

export function drawThreePokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id)
            return item;
    }
}

export function setThreePokemon() {
    numberOfTurns++;

    let firstPokemon = drawThreePokemon();
    let secondPokemon = drawThreePokemon();
    let thirdPokemon = drawThreePokemon();

    while (firstPokemon.id === secondPokemon.id || secondPokemon.id === thirdPokemon.id || firstPokemon.id === thirdPokemon.id) {
        firstPokemon = drawThreePokemon();
        secondPokemon = drawThreePokemon();
        thirdPokemon = drawThreePokemon();
    }

    const pokemonDiv = document.getElementById('pokemon');

    const pokeImg1 = renderPokeImg(firstPokemon);
    const pokeImg2 = renderPokeImg(secondPokemon);
    const pokeImg3 = renderPokeImg(thirdPokemon);

    incrementSeen(firstPokemon.id);
    incrementSeen(secondPokemon.id);
    incrementSeen(thirdPokemon.id);


    const buttonDiv = document.createElement('div');

    const button = document.createElement('button');
    button.classList.add('empty-pokeball-button');
    button.textContent = 'empty pokeball?';

    buttonDiv.appendChild(button);


    pokemonDiv.textContent = '';
    pokemonDiv.append(pokeImg1, pokeImg2, pokeImg3, buttonDiv);

    button.addEventListener('click', () => {
        alert('Are you sure you want to empty your Pokeball and play again?');
        clearPokeBall();
        window.location.href = './index.html';
    });
}

export function renderPokeImg(pokeItem) {
    const image = document.createElement('img');
    image.src = pokeItem.url_image;

    image.classList.add('poke-image');
    image.addEventListener('click', () => {
        incrementCaught(pokeItem.id);
        displayCaught();

        setThreePokemon();
        if (numberOfTurns === 10) window.location = 'results';
    });

    return image;
}

export function displayCaught() {
    const header = document.querySelector('header');
    header.innerHTML = '';
    const image = document.createElement('img');
    image.src = '../assets/pokeball.png';

    const captured = document.createElement('p');

    const encounteredPokemon = getPokeBall();

    let caught = 0;
    for (let pokemon of encounteredPokemon) {
        if (pokemon.caught !== 0) {
            caught += pokemon.caught;
        }
    }
    captured.textContent = `${caught} Pokemon in your Pokeball`;

    header.append(image, captured);
}