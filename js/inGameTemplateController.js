function goBackToMap() {
    model.app.inGameScene = 'Map'
    gameView=mapPageView()
    gameTemplateView()
}

function scrollToBottomOfMessages() {
    const messageContainer = document.querySelector('.showingMessages');
    messageContainer.scrollTop = messageContainer.scrollHeight;
}