import { getPokeBall, clearPokeBall } from '../localStorageUtils.js';
import { makeCaughtArray, makeLabelsArray, makeSeenArray } from './mungeUtils.js';

var ctx = document.getElementById('myChart').getContext('2d');

const myPokeBall = getPokeBall();

var myChart = new Chart(ctx, { //eslint-disable-line
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: makeLabelsArray(myPokeBall),
        datasets: [{
            label: 'X Crossed Paths',
            data: makeSeenArray(myPokeBall),
            backgroundColor: 'rgb(250, 209, 52)',
            borderColor: 'rgb(200, 19, 5)',
            borderStyle: 'dotted'
        },
        {
            label: 'X Caught Em',
            data: makeCaughtArray(myPokeBall),
            backgroundColor: 'rgb(200, 19, 5)',
            borderColor: 'rgb(250, 209, 52)',
            borderStyle: 'dotted'
        }]
    },
    options: {

    }
});

const mainPokeBallSection = document.getElementById('your-results');
const divButton = document.createElement('div');
mainPokeBallSection.appendChild(divButton);

const button = document.createElement('button');
button.textContent = 'empty pokeball?';
divButton.appendChild(button);
button.addEventListener('click', () => {
    alert('Are you sure you want to empty your Pokeball and play again?');
    clearPokeBall();
    window.location.href = './index.html';
});