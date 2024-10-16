function registerView() {

    model.app.currentPage = 'registerPage'

    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1> Register new user </h1>
    <label for= "Username" > Username: </label >
            <input type="text" id="first" placeholder="Enter Username" required />

            <label for= "E-mail"> E-mail: </label >
             <input type="text" id="first" placeholder="Enter E-mail" required />


            <label for="password"> Password: </label>
            <input type="password" id="password" placeholder="Enter Password" required />

            <div class="wrap">
                <button type="submit">Submit</button>
            </div>
    `;
}
