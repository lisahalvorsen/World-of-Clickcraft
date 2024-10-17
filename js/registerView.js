function registerView() {
    let username;
    let password;
    let email;
    let userId;

    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="registerPage">
        <h1> Register new user </h1>

        <label for= "Username" > Username: </label >
        <input type="text" id="registerUsername" oninput="username=this.value" required /> <br>

        <label for= "E-mail"> E-mail: </label >
        <input type="text" id="registerEMail" oninput="email=this.value" required /><br>

        <label for="password"> Password: </label>
        <input type="password" id="registerPassword" oninput="password=this.value" required /><br>

        <button onclick="registerNewUser(password, email, username)" type="submit">Submit</button><br><br>

        <button onclick="goToHomePage()">Return to home page</button>
    
        <p id="registerUserInfo"> </p>

    </div>
    `;
}


