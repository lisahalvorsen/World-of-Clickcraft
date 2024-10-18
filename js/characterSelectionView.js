function characterSelectionView() {
    // let user = model.users.find(user => user.userId === model.app.loggedInUser); // sjekke om den som logger inn har samme id som loggedInUser

    document.getElementById('app').innerHTML = /*HTML*/ `    
        <h1>Hello, ${user.username}</h1>
        <div>
            <img>
            <button>Play with this character</button>
            <img>
            <button>Play with this character</button>
            <img>
            <button>Play with this character</button>

            <button>Create new character</button>

            <button onclick="homePageView()">Log out</button>
        </div>
    `;
}