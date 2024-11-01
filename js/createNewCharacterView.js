let characterDetailsIndex = 0;
let characterName = '';
let chosenClassId = 0;
let reminderTextHtml = '';

function createNewCharacterView() {

    model.app.currentPage = 'createNewCharacterPage';

    document.getElementById('app').innerHTML = /*HTML*/ `
            <div class='createNewCharacterDiv'>
            <h1> Create New Character</h1>
                <div class='inputDiv'>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' name='fname' value='${characterName}' oninput='characterName=this.value'>
                    ${reminderTextHtml}
                </div>
           
            ${characterDetailsHtml()}
            </div>
    `;
}

function characterDetailsHtml() {
    let characterDetailsHtml = '';
    let characterObject = model.classes[characterDetailsIndex]
    chosenClassId = characterObject.id

    characterDetailsHtml += /*HTML*/
        `<div class='characterDiv'>
    <div class='characterDetailsDiv1'>
        <div class='characterPictureDiv'><img class='characterImage' src="${characterObject.picture}" alt=""></div>
        </br>
        <div class='characterDescription'>
        ${characterObject.description}
        </div>
    </div>
    <div class='characterDetailsDiv2'>
        Gender: ${characterObject.gender}
        </br>
        Level: ${characterObject.level}
        </br>
        HP: ${characterObject.hp}
        </br>
        ATK: ${characterObject.atk}
        </br>
        DEF: ${characterObject.def}
        </br>
        SPD: ${characterObject.spd}
    </div>
    </div>
    <div class='classChangeButtons'>
        <button onclick='changeToLastCharacter()'>◀️</button>
        ${characterObject.class}
        <button onclick='changeToNextCharacter()'>▶️</button>
    </div>
    <div class='createButtonDiv'>
        <button onclick="checkNameInput(${chosenClassId}, characterName)">Create</button>
        <button onclick="goToCharacterSelectionPage()">Go back</button>
    </div>
    `;
    return characterDetailsHtml;
}

function changeToNextCharacter() {
    characterDetailsIndex++
    if (characterDetailsIndex === 6) characterDetailsIndex = 0;
    createNewCharacterView()
}

function changeToLastCharacter() {
    characterDetailsIndex--
    if (characterDetailsIndex === -1) characterDetailsIndex = 5;
    createNewCharacterView()
}

function checkNameInput(chosenClassId, characterName) {
    if (characterName !== '') {
        createCharacter(chosenClassId, characterName);
    } else {
        reminderTextHtml = '<p class="warningText">*You need to have a character name to proceed</p>';
        createNewCharacterView();
    }
}



