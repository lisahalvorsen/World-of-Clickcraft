function homePageView() {
    model.app.currentPage = 'homePage';

    document.getElementById('app').innerHTML = /*HTML*/ `
            <div class="homePage">
            <h1> World Of Clickcraft</h1>
                <button onclick="goToLoginPage()">Log in</button>
                <br/>
                <button onclick="goToRegisterPage()">Register</button>
            </div>
    `;
}
