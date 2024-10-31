function goBackToMap() {
    let messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId)
    let message = 'You are on the World Map'
    addMessage(messageLog, message)
    model.app.inGameScene = 'Map'
    gameView=mapPageView()
    gameTemplateView()
}

function scrollToBottomOfMessages() {
    const messageContainer = document.querySelector('.showingMessages');
    messageContainer.scrollTop = messageContainer.scrollHeight;
}