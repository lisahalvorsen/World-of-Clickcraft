function characterSelectionView() {
    let user = model.users.find(user => user.userId === model.app.loggedInUser); // sjekke om den som logger inn har samme id som loggedInUser

    document.getElementById('app').innerHTML = /*HTML*/ `    
        <div>
            <h1>Hello, ${user.username}!</h1>
            ${drawCharactersHtml()}
            <button onclick="homePageView()">Log out</button>
        </div>
    `;
}

function drawCharactersHtml() {
    let html = '';
    let userCharacters = model.characters.find(character => character.userId === model.app.userId);
    console.log(userCharacters);

    if (model.users.userId === model.characters.userId) {
        // console.log(model.users.userId);
        // console.log(model.characters.userId);

        for (const character of model.characters) {
            html += /*HTML*/ `<div>${character.name}</div>`;
            html += /*HTML*/ `<div>${character.gender}</div>`;
            html += /*HTML*/ `<button onclick="goToMapPage()">Play with this character</button>`;
            html += /*HTML*/ `<button onclick="goToCreateNewCharacterPage()">Create new character</button>`;
        }
        return html;
        // } else {
        //     html += `<div>There are no characters to play with</div>`;
        //     html += `<button onclick="goToCreateNewCharacterPage()">Create new character</button>`;
        // }
    }
}
