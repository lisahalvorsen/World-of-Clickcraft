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
    model.app.currentPage = 'shopPage';
    updateView();
}

function logOutButton() {
    model.app.currentPage = 'homePage';
    updateView();
}

function goToTownIsland() {
    gameView = townQuestView();
    gameTemplateView();
}

function goToCaveIsland() {
    const characterInfo = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
    if (!caveQuest.questFinished){
        characterInfo.currentQuest = caveQuest[0].name;
        characterInfo.currentQuestStep = caveQuest[0].currentQuestStep ?? '';
    }
    gameView = caveQuestView();
    gameTemplateView();
}
function goToDesertIsland() {
    gameView = desertQuestView();
    gameTemplateView();
}
function goToforestIsland() {
    gameView = forestQuestView();
    gameTemplateView();
}
function goToMountainIsland() {
    gameView = mountainQuestView();
    gameTemplateView();
}
function goToBossIsland() {
    gameView = bossQuestView();
    gameTemplateView();
}