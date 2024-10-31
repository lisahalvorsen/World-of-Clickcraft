function createCharacter(chosenClassId, name) {
    createUserNewCharacterInfo(chosenClassId, name)
    createNewCharacterStats(chosenClassId)
    createNewInventory()
    createNewMessageLog()
    createNewCaveQuest()
    createNewCharacterEquippedItems(chosenClassId)
    goToHomePage()
}

function createUserNewCharacterInfo(chosenClassId, name) {
    let charactersArray = model.characters
    let UserId = model.app.loggedInUser
    let existingCharacterId = charactersArray.filter(existingCharacter => existingCharacter.userId === UserId);
    let characterCount = existingCharacterId.length
    let classDetails = model.classes[chosenClassId]
    model.app.loggedInCharacterId = characterCount
    let newCharacter = { userId: UserId, characterId: characterCount, classId: chosenClassId, areaId: 1, name: name, gender: classDetails.gender, picture: classDetails.picture }
    charactersArray.push(newCharacter);
}

function createNewCharacterStats(chosenClassId) {
    let statsArray = model.stats
    let UserId = model.app.loggedInUser
    let chosenClassStats = model.classes.find(characterClass => characterClass.id === chosenClassId);
    // let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    // let characterCount = existingCharacterId.length
    let charactedId = model.app.loggedInCharacterId
    let newCharaterStats = { userId: UserId, characterId: charactedId, currenthp: chosenClassStats.hp, picture: chosenClassStats.picture, hp: chosenClassStats.hp, level: chosenClassStats.level, atk: chosenClassStats.atk, def: chosenClassStats.def, spd: chosenClassStats.spd, xp: chosenClassStats.xp, money: chosenClassStats.money }
    statsArray.push(newCharaterStats);
}

function createNewInventory() {
    let inventoriesArray = model.inventories
    let UserId = model.app.loggedInUser
    // let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    // let characterCount = existingCharacterId.length
    let charactedId = model.app.loggedInCharacterId
    let newInventory = { userId: UserId, characterId: charactedId, hasKey: false, keySelected: false, pet: null, money: 1000, items: [{ name: 'Health potion', count: 10, symbol: '🧪' }, { name: 'Apple', count: 1, symbol: '🍎' },], }
    inventoriesArray.push(newInventory);
}

function createNewMessageLog() {
    let messageLogArray = model.messageLog
    let UserId = model.app.loggedInUser
    // let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    // let characterCount = existingCharacterId.length
    let charactedId = model.app.loggedInCharacterId
    let newCharacterInfo = findCharacterInfo(UserId, charactedId)
    let newMessageLog = { userId: UserId, characterId: charactedId, text: [`Welcome to the World of ClickCraft, ${newCharacterInfo.name}! Head to the Town to receive your first quest, or venture out and explore the vast world of ClickCraft at your own pace. Adventure awaits!`]}
    messageLogArray.push(newMessageLog)
}

function createNewCaveQuest() {
    let caveQuestArray = model.caveQuest
    let UserId = model.app.loggedInUser
    // let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    // let characterCount = existingCharacterId.length
    let charactedId = model.app.loggedInCharacterId
    let newCaveQuest = [
        { id: 1, userId: UserId, characterId: charactedId, name: 'Cave Quest', currentQuestStep: 'Kill monster', progress: 0, questFinished: false, stoneWallPresent: true, doorPresent: false, stoneCount: 5 },
        { id: 2, userId: UserId, characterId: charactedId, name: 'Cave monster', currentHp: 100, hp: 100, level: 1, atk: 10, def: 10, spd: 10, caveMonsterPresent: true },
        { id: 3, userId: UserId, characterId: charactedId, name: 'Cave Boss', currentHp: 100, hp: 100, level: 3, atk: 30, def: 30, spd: 30, caveBossPresent: false },
    ];
    caveQuestArray.push(...newCaveQuest);
}

function createNewCharacterEquippedItems(chosenClassId) {
    let equippedItemsArray = model.equippedItems
    let UserId = model.app.loggedInUser
    // let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    // let characterCount = existingCharacterId.length
    let charactedId = model.app.loggedInCharacterId
    let weaponId = equipmentSearch(chosenClassId, model.weapons)
    let armorId = equipmentSearch(chosenClassId, model.armors)
    let bootsDetails = model.boots.find(boot => boot.name.includes('Old'))
    let newCharacterEquippedItems = { userId: UserId, characterId: charactedId, weaponId: weaponId, armorId: armorId, bootsId: bootsDetails.id }
    equippedItemsArray.push(newCharacterEquippedItems);
}

function equipmentSearch(chosenClassId, equiptmentArray) {
    let classDetail = model.classes.find(characterClass => characterClass.id === chosenClassId)
    let characterClass = classDetail.class
    let equipment = equiptmentArray.find(equipment =>
        equipment.class === characterClass && equipment.name.includes('Old')
    );
    return equipment.id;
}

