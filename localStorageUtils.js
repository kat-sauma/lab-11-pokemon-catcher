const POKEBALL = 'POKEBALL';
const defaultEmptyPokeBall = [];
import { findById } from './utils.js';

export function getPokeBall() {
    let ball = JSON.parse(localStorage.getItem(POKEBALL));

    if (!ball) {
        ball = [];
        localStorage.setItem(POKEBALL, JSON.stringify(ball));
    }

    return ball;
}

export function setPokeBall(newBall) {
    localStorage.setItem(POKEBALL, JSON.stringify(newBall));
}

export function incrementSeen(id) {
    const ball = getPokeBall();

    const poke = findById(id, ball);

    if (!poke) {
        const newInBall = {
            id: id,
            seen: 1,
            caught: 0,
        };

        ball.push(newInBall);
    } else {
        poke.seen++;
    }
    setPokeBall(ball);
}

export function incrementCaught(id) {
    const ball = getPokeBall();
    const poke = findById(id, ball);

    poke.caught++;

    setPokeBall(ball);
}

export function clearPokeBall() {
    const currentPokeBall = JSON.stringify(defaultEmptyPokeBall);
    localStorage.setItem(POKEBALL, currentPokeBall);
}