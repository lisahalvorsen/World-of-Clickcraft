function goToLoginPage() {
    model.app.currentPage = 'login';
    updateView();
}

function goToRegisterPage() {
    model.app.currentPage = 'register';
    updateView();
}

function goToHomePage() {
    model.app.currentPage = 'homePage';
    updateView();
}