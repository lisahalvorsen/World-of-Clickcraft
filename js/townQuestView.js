function townQuestView() {
    model.app.inGameScene = 'Town'
    return /*HTML*/ ` 
    <div class='townMap'>
        <div class='elderDiv'></div>
        <div class='shopDiv' onclick="goToShop()"></div>
    </div>
    `;
}