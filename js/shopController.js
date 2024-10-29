// function getUserMoney() {
//     const userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
//     return userInventory.money;
//     // return model.inventories.find(inventory => inventory.userId === model.app.loggedInUser).money;
// }

function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    shopView(filteredItems);
    gameTemplateView();
}

function buyItem(price, item, symbol) {
    canAfford(price);
    inventoryContainsItem(item, symbol);
    shopView();
    gameTemplateView();
}

function canAfford(price) {
    const userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
    let userMoney = userInventory.money;

    if (userMoney >= price) {
        userInventory.money -= price;
    }
}

function inventoryContainsItem(itemName, symbol) {
    const userInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
    const existingItem = userInventory.items.find(item => item.name === itemName);
    const itemSymbol = model.shop.find(item => item.symbol === symbol);

    if (existingItem) {
        existingItem.count++;
        console.log(`Item exists`);
    } else {
        const newItem = {
            name: itemName,
            count: 1,
            symbol: itemSymbol.symbol,
        };

        userInventory.items.push(newItem);
        console.log(`New item is added in the inventory`);
    }
}

// oppdatere gametemplateview 
// endre alle health potions