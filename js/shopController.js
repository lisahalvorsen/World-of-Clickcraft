function buyItem(item) {
    // model.inventories.push(item);

    // console.log(model.inventories);
    console.log('hello')
}

function getUserMoney() {
    let userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
    return userInventory.money;
    // return model.inventories.find(inventory => inventory.userId === model.app.loggedInUser).money;
}

function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    shopView(filteredItems);
}