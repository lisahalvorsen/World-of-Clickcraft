function buyItem(item) {
    // model.inventories.push(item);

    // console.log(model.inventories);
    console.log('hello')
}

function getUserMoney() {
    let userInventory = model.inventories.find(inventory => inventory.userId === model.app.loggedInUser);
    return userInventory.money;
}