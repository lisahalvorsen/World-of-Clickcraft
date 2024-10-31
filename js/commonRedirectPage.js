function goToLoginPage() {
    model.app.currentPage = 'loginPage';
    updateView();
}

function goToRegisterPage() {
    model.app.currentPage = 'registerPage';
    updateView();
}

function goToHomePage() {
    model.app.currentPage = 'homePage';
    updateView();
}

function goToCharacterSelectionPage() {
    model.app.currentPage = 'characterSelectionPage';
    updateView();
}

function goToCreateNewCharacterPage() {
    model.app.currentPage = 'createNewCharacterPage';
    updateView();
}

function goToGamePage() {
    model.app.currentPage = 'inGamePage';
    updateView();
}

function goToShop() {
    let messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId)
    let message = 'You have entered The Shop'
    addMessage(messageLog, message)
    gameView = shopView();
    gameTemplateView();
}

function logOutButton() {
    model.app.currentPage = 'homePage';
    updateView();
}

function goToTownIsland() {
    let messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId)
    let message = 'You have entered Town'
    addMessage(messageLog, message)
    gameView = townQuestView();
    gameTemplateView();
}

function goToCaveIsland() {
    const characterInfo = findCharacterInfo(model.app.loggedInUser, model.app.loggedInCharacterId);
    const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
    let messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId)
    let message = 'You have entered The Cave'
    addMessage(messageLog, message)
    if (!caveQuest[0].questFinished) {
        characterInfo.currentQuest = caveQuest[0].name;
        characterInfo.currentQuestStep = caveQuest[0].currentQuestStep ?? '';
    } else {
        caveQuest[2].caveBossPresent=true;
        caveQuest[2].currentHp=caveQuest[2].hp;
    }
    gameView = caveQuestView();
    gameTemplateView();
}
function goToDesertIsland() {
    let messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId)
    let message = 'You have entered The Desert'
    addMessage(messageLog, message)
    gameView = desertQuestView();
    gameTemplateView();
}
function goToforestIsland() {
    let messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId)
    let message = 'You have entered The Forest'
    addMessage(messageLog, message)
    gameView = forestQuestView();
    gameTemplateView();
}
function goToMountainIsland() {
    let messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId)
    let message = 'You have entered The Mountain'
    addMessage(messageLog, message)
    gameView = mountainQuestView();
    gameTemplateView();
}
function goToBossIsland() {
    gameView = bossQuestView();
    gameTemplateView();
}