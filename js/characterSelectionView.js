function characterSelectionView() {
    let user = model.users.find(user => user.userId === model.app.loggedInUser); // sjekke om den som logger inn har samme id som loggedInUser

    document.getElementById('app').innerHTML = /*HTML*/ `    
        <div>
            <h1>Hello, ${user.username}!</h1>
            <h2>My characters</h2>
            ${drawCharactersHtml()}
            <button onclick="goToCreateNewCharacterPage()">Create new character</button>
            <button onclick="homePageView()">Log out</button>
        </div>
    `;
}

function drawCharactersHtml() { // gjøre denne penere
    let loggedInUserCharacters = [];
    let html = '';

    let userCharacter = model.characters.find(character => character.userId === model.app.loggedInUser);
    loggedInUserCharacters.push(userCharacter);

    if (loggedInUserCharacters) {
        for (const character of loggedInUserCharacters) {
            html += /*HTML*/ `<div>${character.name}</div>`;
            html += /*HTML*/ `<div>${character.gender}</div>`;
            html += /*HTML*/ `<button onclick="goToMapPage()">Play with this character</button>`;
        }
        return html;
    }
}
