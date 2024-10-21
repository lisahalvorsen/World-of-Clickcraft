function characterSelectionView() {
    let user = model.users.find(user => user.userId === model.app.loggedInUser); // sjekke om den som logger inn har samme id som loggedInUser

    document.getElementById('app').innerHTML = /*HTML*/ `    
        <div class="characterContainer">
            <h1>Hello, ${user.username}!</h1>
            <h2>My characters</h2>
            <div class="myCharacters">${drawCharactersHtml()}</div>
            <div>
                <button onclick="goToCreateNewCharacterPage()" class="characterSelectionBtn">Create new character</button>
                <button onclick="homePageView()" class="characterSelectionBtn">Log out</button>
            </div>
        </div>
    `;
}

function drawCharactersHtml() {
    let html = '';

    let userCharacter = model.characters.filter(character => character.userId === model.app.loggedInUser);

    for (const character of userCharacter) {
        html += /*HTML*/ `
            <div class="characterInfo">
                <img class="characterPicture" src="${character.picture}" />
                <div class="characterName">${character.name} ${character.gender}</div>
                ${drawCharacterLevelHtml()}
                <button onclick="gameTemplateView()" class="characterSelectionBtn">Play with this character</button>
            </div>`;
    }
    return html;
}

function drawCharacterLevelHtml() {
    let html = '';

    let userCharacter = model.stats.filter(stat => stat.userId === model.app.loggedInUser);

    for (const character of userCharacter) {
        html = /*HTML*/ ` 
        <div>Level ${character.level}</div>`;
    }
    return html;
}