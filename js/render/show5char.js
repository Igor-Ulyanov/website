export function show5characters(state) {

    var characters = Array.from(state.displayNames.values()).slice(0, 5);

    displayString = "";

    for (let i = 0; i < characters.length; i++) {
        displayString += '<li>' + characters[i] + '</li>';
    }

    document.getElementsByClassName("buttons")[0].innerHTML = 
    '<div class="game"><ul>' + displayString + '</ul></div>';
}