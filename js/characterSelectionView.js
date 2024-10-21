function characterSelectionView() {
    let user = model.users.find(user => user.userId === model.app.loggedInUser); // sjekke om den som logger inn har samme id som loggedInUser

    document.getElementById('app').innerHTML = /*HTML*/ `    
        <div class="characterContainer">
            <h1>Hello, ${user.username}!</h1>
            <h2>My characters</h2>
            <div class="myCharacters">${drawCharactersHtml()}</div>
            <div>
                <button onclick="goToCreateNewCharacterPage()">Create new character</button>
                <button onclick="homePageView()">Log out</button>
            </div>
        </div>
    `;
}

function drawCharactersHtml() { // gjøre denne penere
    let html = '';

    let userCharacter = model.characters.filter(character => character.userId === model.app.loggedInUser);

    for (const character of userCharacter) {
        html += /*HTML*/ `
            <div>
                <img class="characterPicture" src="${character.picture}" />
                <div>${character.name} ${character.gender}</div>
                <button onclick="goToMapPage()" class="playBtn">Play with this character</button>
            </div>
        `;
    }
    return html;
}
