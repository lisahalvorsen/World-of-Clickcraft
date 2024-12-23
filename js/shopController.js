function getShopInventory(category = null) {
    model.app.selectedCategory = category;
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    renderShopHtml(shopView(filteredItems));
}

function buyItem(price, itemName, itemQuantity, symbol, itemCategory) {
    const userInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
    const existingItem = userInventory.items.find(item => item.name === itemName);
    const itemSymbol = model.shop.find(item => item.symbol === symbol);
    const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);

    if (userInventory.money >= price) {
        userInventory.money -= price;

        if (!existingItem) {
            const newItem = {
                name: itemName,
                quantity: itemQuantity,
                symbol: itemSymbol.symbol,
                category: itemCategory,
            };
            userInventory.items.push(newItem);
        } else if (existingItem) {
            existingItem.quantity += itemQuantity;
        }
    } else {
        addMessage(messageLog, `Oh no, it seems you don't have enough money :(`);
    }

    gameTemplateView();
}

function renderShopHtml(html) {
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

function increaseStockAndPrice(itemName) {
    const shopItem = model.shop.find(item => item.name === itemName);

    if (shopItem) {
        shopItem.quantity++;
        shopItem.price = shopItem.originalPrice * shopItem.quantity;
    }

    const filteredItems = model.app.selectedCategory ? model.shop.filter(item => item.category === model.app.selectedCategory) : model.shop;
    renderShopHtml(shopView(filteredItems));
}

function decreaseStockAndPrice(itemName) {
    const shopItem = model.shop.find(item => item.name === itemName);

    if (shopItem) {
        shopItem.quantity = Math.max(1, shopItem.quantity - 1);

        if (shopItem.quantity <= 1) {
            shopItem.price = shopItem.originalPrice;
        } else {
            shopItem.price = shopItem.price - shopItem.originalPrice;
        }
    }

    const filteredItems = model.app.selectedCategory ? model.shop.filter(item => item.category === model.app.selectedCategory) : model.shop;
    renderShopHtml(shopView(filteredItems));
}