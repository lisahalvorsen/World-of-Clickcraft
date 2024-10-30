
function findCharacterMessageLog(userId, characterId) {
    return model.messageLog.find(msg => msg.userId === userId && msg.characterId === characterId);
}
function findCharacterInventory(userId, characterId) {
    return model.inventories.find(invent => invent.userId === userId && invent.characterId === characterId);
}
function findCharacterCaveQuest(userId, characterId) {
    return model.caveQuest.filter(id => id.userId === userId && id.characterId === characterId);
}
function findCharacterStats(userId, characterId) {
    return model.stats.find(userStat => userStat.userId === userId && userStat.characterId === characterId);
}
function findCharacterCharacterInfo(userId, characterId) {
    return model.characters.find(character => character.userId === userId && character.characterId === characterId);
}

function findCharacterEquipped(userId, characterId) {
    return model.equippedItems.find(character => character.userId === userId && character.characterId === characterId);
}


function addMessage(messageLog, newMessage) {
    messageLog.text.push(newMessage);
    if (messageLog.text.length > 20) {
        messageLog.text.shift();
    }
}

function updateEnemyHealthBar(enemy) {
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const bossStats = caveQuest[enemy]; 
    const healthPercentage = (bossStats.currentHp / bossStats.hp) * 100;
    return healthPercentage;
}

function updateCharacterHealthBar(currentHp, hp) {
    const healthPercentage = (currentHp / hp) * 100;
    return healthPercentage;
}

