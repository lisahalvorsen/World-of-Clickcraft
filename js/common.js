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

function goToTown() {
    model.app.currentPage = 'townPage';
    updateView();
}