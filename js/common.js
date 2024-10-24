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

function goToTown() {
    model.app.currentPage = 'townPage';
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
    let messageLog = model.messageLog.find(log => log.userId === userId && log.characterId === characterId);

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
    weapon:userWeapon.name,
    armor:userArmor.name,
    boots:userBoots.name,
    messageLog:[messageLog.text],
    }
}

function logOutButton(){
    alert('logging Out Now!');
    model.app.currentPage = 'homePage';
    updateView();
}