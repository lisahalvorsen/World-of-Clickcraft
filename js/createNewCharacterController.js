function createCharacter(chosenClassId, name, gender) {
    createUserNewCharacterInfo(chosenClassId, name, gender)
    createNewCharacterStats(chosenClassId)
    createNewInventory()
    createNewCharacterEquippedItems(chosenClassId)
    goToGamePage()
}

function createUserNewCharacterInfo(chosenClassId, name, gender) {
    let charactersArray = model.characters
    let userId = model.app.userId
    let existingCharacterId = charactersArray.filter(existingCharacter => existingCharacter.id === userId);
    let characterCount = existingCharacterId.length
    let newCharacter = { userId: userId, characterId: characterCount, classId: chosenClassId, areaId: 1, name:name, gender:gender  }
    charactersArray.push(newCharacter)
}

function createNewCharacterStats(chosenClassId) {
    let statsArray = model.stats
    let userId = model.app.userId
    let chosenClassStats = model.classes.filter(characterClass => characterClass.id === chosenClassId);
    let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.id === userId);
    let characterCount = existingCharacterId.length
    let newCharaterStats = { userId: userId, characterId: characterCount-1,picture:chosenClassStats[0].picture, hp: chosenClassStats[0].hp, level: chosenClassStats[0].level, atk: chosenClassStats[0].atk, def: chosenClassStats[0].def, spd: chosenClassStats[0].spd, xp:chosenClassStats[0].xp, money:chosenClassStats[0].money}
    statsArray.push(newCharaterStats)
}

function createNewInventory() {
    let inventoriesArray = model.inventories
    let userId = model.app.userId
    let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.id === userId);
    let characterCount = existingCharacterId.length
    let newInventory = { userId: userId, characterId: characterCount-1, hasKey: false, pet: null }
    inventoriesArray.push(newInventory)
    console.log(inventoriesArray)
}

function createNewCharacterEquippedItems(chosenClassId) {
    let equippedItemsArray = model.equippedItems
    let userId = model.app.userId
    let existingCharacterId = model.characters.filter(existingCharacter => existingCharacter.id === userId);
    let characterCount = existingCharacterId.length
    let weaponId = equipmentSearch(chosenClassId, model.weapons)
    let armorId = equipmentSearch(chosenClassId, model.armors)
    let bootsDetails = model.boots.find(boot => boot.name.includes('Old'))
    let newCharacterEquippedItems = { userId: userId, characterId: characterCount-1, weaponId: weaponId, armorId: armorId, bootsId: bootsDetails.id }
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