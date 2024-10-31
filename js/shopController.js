function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    renderHtml(shopView(filteredItems));
}

function buyItem(price, itemName, symbol) {
    const userInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
    const userMoney = userInventory.money;
    const existingItem = userInventory.items.find(item => item.name === itemName);
    const itemSymbol = model.shop.find(item => item.symbol === symbol);
    const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);

    if (userMoney >= price) {
        userInventory.money -= price;

        if (existingItem) {
            existingItem.count++;
        } else {
            const newItem = {
                name: itemName,
                count: 1,
                symbol: itemSymbol.symbol,
            };
            userInventory.items.push(newItem);
        }
    } else {
        addMessage(messageLog, `Oh no, it seems you don't have enough money :(`);
    }

    shopView();
    gameTemplateView();
}

function renderHtml(html) {
    const container = document.getElementById('shopContainer');
    container.innerHTML = html;
}

function getMoreInfo(itemName) {
    const item = model.shop.find(item => item.name === itemName);

    if (item) {
        const itemDsecription = item.description;
        gameView = showItemView(item.name, itemDsecription);
        gameTemplateView();
    }
}

function increaseStock(itemName) {
    const itemStock = model.shop.find(item => item.name === itemName);

    if (itemStock) {
        itemStock.stock++;
    }

    renderHtml(shopView());
}

function decreaseStock(itemName) {
    const itemStock = model.shop.find(item => item.name === itemName);

    if (itemStock) {
        itemStock.stock = Math.max(0, itemStock.stock - 1);
    }

    renderHtml(shopView());
}