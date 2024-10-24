function goBackToMap() {
    gameView=mapPageView()
    gameTemplateView()
}

function scrollToBottomOfMessages() {
    const messageContainer = document.querySelector('.showingMessages');
    messageContainer.scrollTop = messageContainer.scrollHeight;
}