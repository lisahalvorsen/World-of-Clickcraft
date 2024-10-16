function goToLoginPage() {
    model.app.currentPage = 'loginPage';
    updateView();
}

function goToRegisterPage() {
    model.app.currentPage = 'registerPage';
    updateView();
}