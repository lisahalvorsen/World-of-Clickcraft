function loginView() {
    let username;
    let password;

    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="loginPage">
    <h1>Login</h1> <br>
            <label for= "Username" > Username: </label >
            <input type="text" id="loginUsername" oninput="username=this.value" required /><br>

            <label for="password"> Password: </label>
            <input type="password" id="loginPassword" oninput="password=this.value" required /><br>

            <button onclick="logInUser(username, password)" type="submit">Submit</button><br><br>
            <button onclick="goToRegisterPage()">Forgot password?</button>
            <button onclick="goToRegisterPage()">Create new user</button>

            <p id="loginUserInfo"> </p>

    </div>        
    `;
}