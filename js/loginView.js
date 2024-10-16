function loginView() {
    model.app.currentPage = 'loginPage';


    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1>Login</h1>
            <label for= "Username" > Username: </label >
            <input type="text" id="first" placeholder="Enter Username" required />

            <label for="password"> Password: </label>
            <input type="password" id="password" placeholder="Enter Password" required />

            <div class="wrap">
                <button type="submit">Submit</button>
            </div>
    `;
}