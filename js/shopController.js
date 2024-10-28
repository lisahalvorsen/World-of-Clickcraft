function getUserMoney() {
    let userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
    return userInventory.money;
    // return model.inventories.find(inventory => inventory.userId === model.app.loggedInUser).money;
}

function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    shopView(filteredItems);
}

function buyItem(itemName, count, price) {
    let userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
    let userMoney = userInventory.money;

    if (userMoney >= price) {
        userInventory.money -= price;

        const purchasedItem = {
            name: itemName,
            count: 1,
        };

        userInventory.items = userInventory.items || [];
        userInventory.items.push(purchasedItem);
    }

    shopView();
}