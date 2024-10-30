function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    renderHtml(shopView(filteredItems));
}

function buyItem(price, itemName, symbol) {
    const userInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
    let userMoney = userInventory.money;
    const existingItem = userInventory.items.find(item => item.name === itemName);
    const itemSymbol = model.shop.find(item => item.symbol === symbol);

    if (userMoney >= price && existingItem) {
        existingItem.count++;
    } else if (userMoney >= price && !existingItem) {
        const newItem = {
            name: itemName,
            count: 1,
            symbol: itemSymbol.symbol,
        };

        userInventory.items.push(newItem);
    } else if (userMoney < price) {
        return;
    }

    userInventory.money -= price;

    shopView();
    gameTemplateView();
}

function renderHtml(html) {
    const container = document.getElementById('shopContainer');
    container.innerHTML = html;
}