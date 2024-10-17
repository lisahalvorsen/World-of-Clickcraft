<<<<<<< Updated upstream
function homePageView() {
=======
function homepageView() {
    model.app.currentPage = 'home';

>>>>>>> Stashed changes
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="homePage">
            <img src="../img/WoF.png" alt="World of Clickcraft logo" class="wof-logo">
            <h1>World Of Clickcraft</h1>
            <div>
                <button onclick="goToLoginPage()">Login</button>
                <button onclick="goToRegisterPage()">Register</button>
            </div>
        </div>
    `;
}
