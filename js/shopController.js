function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    console.log(filteredItems);
    shopView(items = filteredItems);
}

function buyItem(price, itemName, symbol) {
    const userInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
    let userMoney = userInventory.money;
    const existingItem = userInventory.items.find(item => item.name === itemName);
    const itemSymbol = model.shop.find(item => item.symbol === symbol);

    if (userMoney >= price && existingItem) {
        userInventory.money -= price;
        existingItem.count++;
    } else if (userMoney >= price && !existingItem) {
        const newItem = {
            name: itemName,
            count: 1,
            symbol: itemSymbol.symbol,
        };

        userInventory.items.push(newItem);
    }

    shopView();
    gameTemplateView();
}

// oppdatere kategori view
// endre alle health potions