function goToLoginPage() {
    model.app.currentPage = 'loginPage';
    updateView();
}

function goToRegisterPage() {
    model.app.currentPage = 'registerPage';
    updateView();
}

function goToHomePage() {
    model.app.currentPage = 'homePage';
    updateView();
}

function goToCharacterSelectionPage() {
    model.app.currentPage = 'characterSelectionPage';
    updateView();
}

function goToCreateNewCharacterPage() {
    model.app.currentPage = 'createNewCharacterPage';
    updateView();
}

function goToGamePage() {
    model.app.currentPage = 'inGamePage';
    updateView();
}

function goToShop() {
    model.app.currentPage = 'shopPage';
    updateView();
}

function inGameStats() {
    let UserId = model.app.loggedInUser
    let characterId = model.app.loggedInCharacterId
    let userStats = model.stats.find(userStat => userStat.userId === UserId && userStat.characterId === characterId)
    let userEquipments = model.equippedItems.find(userEquipment => userEquipment.userId === UserId)
    let userWeapon = model.weapons.find(weapon => weapon.id === userEquipments.weaponId)
    let userArmor = model.armors.find(armor => armor.id === userEquipments.armorId)
    let userBoots = model.boots.find(boots => boots.id === userEquipments.bootsId)
    let messageLog = model.messageLog.find(log => log.userId === UserId && log.characterId === characterId);

    model.app.currentCharacterInfo = {
        currenthp: userStats.currenthp,
        picture: userStats.picture,
        hp: userStats.hp,
        level: userStats.level,
        atk: userStats.atk,
        def: userStats.def,
        spd: userStats.spd,
        xp: userStats.xp,
        money: userStats.money,
        weapon: userWeapon.name,
        armor: userArmor.name,
        boots: userBoots.name,
        messageLog: [messageLog.text],
        currentQuest: '',
        currentQuestStep: '',

    }
}

function logOutButton() {
    model.app.currentPage = 'homePage';
    updateView();
}

function goToTownIsland() {
    gameView = townQuestView();
    gameTemplateView();
}
function goToCaveIsland() {
    const characterInfo = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);

    characterInfo.currentQuest = caveQuest[0].name;
    characterInfo.currentQuestStep = caveQuest[0].currentQuestStep ?? '';

    gameView = caveQuestView();
    gameTemplateView();
}
function goToDesertIsland() {
    gameView = desertQuestView();
    gameTemplateView();
}
function goToforestIsland() {
    gameView = forestQuestView();
    gameTemplateView();
}
function goToMountainIsland() {
    gameView = mountainQuestView();
    gameTemplateView();
}
function goToBossIsland() {
    gameView = bossQuestView();
    gameTemplateView();
}



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
// function findCharacterBoots(userId, characterId) {
//     return model.equippedItems.find(character => character.userId === userId && character.characterId === characterId);
// }
// function findCharacterArmour(userId, characterId) {
//     return model.equippedItems.find(character => character.userId === userId && character.characterId === characterId);
// }


function addMessage(messageLog, newMessage) {
    messageLog.text.push(newMessage);
    if (messageLog.text.length > 50) {
        messageLog.text.shift();
    }
}
