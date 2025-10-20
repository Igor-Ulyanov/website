import { GameSession } from './core/game_session.js';
import { show5characters } from './render/show5char.js';

function initialize() {

    var gameSession = new GameSession().create();
    show5characters(gameSession);

}

// Attach the event once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("playRandom").addEventListener("click", initialize);
});