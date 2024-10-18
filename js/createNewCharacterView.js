let characterDetailsIndex = 0;
let characterName = '';
let gender = '';
let chosenClassId = 0;

function createNewCharacterView() {

    model.app.currentPage = 'createNewCharacterPage';

    document.getElementById('app').innerHTML = /*HTML*/ `
            <div class='createNewCharacterDiv'>
            <h1> Create New Character</h1>
                <div class='inputDiv'>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' name='fname' oninput='characterName=this.value'>
                    </br>
                    Gender:
                    <input type='checkbox' id='genderM' name='genderM' value='M' oninput='gender=this.value'>
                    <label for='genderM'>M</label>
                    <input type='checkbox' id='genderF' name='genderF' value='F' oninput='gender=this.value'>
                    <label for='genderF'>F</label>
                </div>
            </br>
            </br>
            ${characterDetailsHtml()}
            </div>
    `;
}

function characterDetailsHtml() {
    let characterDetailsHtml= '';
    let characterObject = model.classes[characterDetailsIndex]
    chosenClassId = characterObject.id

    characterDetailsHtml += 
    `<div class='characterDiv'>
    <div class='characterDetailsDiv1'>
        <div class='characterPictureDiv'>${characterObject.picture}</div>
        </br>
        ${characterObject.description}
    </div>
    <div class='characterDetailsDiv2'>   
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
        <button onclick='changeToNextCharacter()'><</button>
        ${characterObject.class}
        <button onclick='changeToNextCharacter()'>></button>
    </div>
    <div class='createButtonDiv' onclick='createCharacter(chosenClassId, characterName, gender)'><button>Create</button></div>
    `  
    return characterDetailsHtml
}

function changeToNextCharacter() {
    characterDetailsIndex++
    if (characterDetailsIndex === 3) characterDetailsIndex = 0;
    createNewCharacterView()
}




