function playWithCharacter(characterId) {
    model.app.loggedInCharacterId = characterId;
    inGameStats();
    goToGamePage();
}