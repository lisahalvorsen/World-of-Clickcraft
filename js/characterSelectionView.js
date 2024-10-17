function characterSelectionView() {
    model.app.currentPage = 'characterSelection';
    let user = model.users.find(user => user.userId === model.app.userId); // sjekker om en brukerId er den samme som en bruker

    document.getElementById('app').innerHTML = /*HTML*/ `    
        <h1>${user.username ? `Hello, ${user.username}!` : `Good day!`}</h1>
        
        <div>
            <img>
            <button>Play with this character</button>
            <img>
            <button>Play with this character</button>
            <img>
            <button>Play with this character</button>

            <button>Create new character</button>

            <button onclick="homepageView()">Log out</button>
        </div>
    `;
}