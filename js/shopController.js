function getUserMoney() {
    const userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
    return userInventory.money;
    // return model.inventories.find(inventory => inventory.userId === model.app.loggedInUser).money;
}

function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    shopView(filteredItems);
}

function buyItem(price) {
    canAfford(price);

    // if (userMoney >= price) {
    //     userInventory.money -= price;

    //     const purchasedItem = {
    //         name: itemName,
    //         count: 1,
    //     };

    //     userInventory.items = userInventory.items || [];
    //     userInventory.items.push(purchasedItem);
    //     console.log(model.inventories);
    shopView();
}

function canAfford(price) {
    const userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
    let userMoney = userInventory.money;

    if (userMoney >= price) {
        userInventory.money -= price;
    }
}





function checkIfItemIsInInventory(itemName) {
    const item = characterInventory.items.find(item => item.name === itemName);

    if (item) {
        item.count++;
    } else {
        const purchasedItem = {
            name: itemName,
            count: 1,
        };
    }

}


// if item exists, add count med +1 eller legg til items