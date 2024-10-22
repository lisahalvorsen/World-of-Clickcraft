function createCharacter(chosenClassId, name) {
    createUserNewCharacterInfo(chosenClassId, name)
    createNewCharacterStats(chosenClassId)
    createNewInventory()
    createNewCharacterEquippedItems(chosenClassId)
    inGameStats()
    goToGamePage()
}

function createUserNewCharacterInfo(chosenClassId, name) {
    let charactersArray = model.characters
    let UserId = model.app.loggedInUser
    let existingCharacterId = charactersArray.filter(existingCharacter => existingCharacter.userId === UserId);
    let characterCount = existingCharacterId.length
    let classDetails = model.classes[chosenClassId]
    model.app.loggedInCharacterId = characterCount
    let newCharacter = { userId: UserId, characterId: characterCount, classId: chosenClassId, areaId: 1, name:name, gender:classDetails.gender, picture:classDetails.picture}
    charactersArray.push(newCharacter)
}

function createNewCharacterStats(chosenClassId) {
    let statsArray = model.stats
    let UserId = model.app.loggedInUser
    let chosenClassStats = model.classes.filter(characterClass => characterClass.id === chosenClassId);
    let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    let characterCount = existingCharacterId.length
    let newCharaterStats = { userId: UserId, characterId: characterCount-1,picture:chosenClassStats[0].picture, hp: chosenClassStats[0].hp, level: chosenClassStats[0].level, atk: chosenClassStats[0].atk, def: chosenClassStats[0].def, spd: chosenClassStats[0].spd, xp:chosenClassStats[0].xp, money:chosenClassStats[0].money}
    statsArray.push(newCharaterStats)
}

function createNewInventory() {
    let inventoriesArray = model.inventories
    let UserId = model.app.loggedInUser
    let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    let characterCount = existingCharacterId.length
    let newInventory = { userId: UserId, characterId: characterCount-1, hasKey: false, pet: null }
    inventoriesArray.push(newInventory)
}

function createNewCharacterEquippedItems(chosenClassId) {
    let equippedItemsArray = model.equippedItems
    let UserId = model.app.loggedInUser
    let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.userId === UserId);
    let characterCount = existingCharacterId.length
    let weaponId = equipmentSearch(chosenClassId, model.weapons)
    let armorId = equipmentSearch(chosenClassId, model.armors)
    let bootsDetails = model.boots.find(boot => boot.name.includes('Old'))
    let newCharacterEquippedItems = { userId: UserId, characterId: characterCount-1, weaponId: weaponId, armorId: armorId, bootsId: bootsDetails.id }
    equippedItemsArray.push(newCharacterEquippedItems)
}

function equipmentSearch(chosenClassId, equiptmentArray) {
    let classDetail = model.classes.find(characterClass => characterClass.id===chosenClassId)
    let characterClass = classDetail.class
    let equipment = equiptmentArray.find(equipment => 
        equipment.class === characterClass && equipment.name.includes('Old')
    );
    return equipment.id
}

