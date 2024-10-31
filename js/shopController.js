function getShopInventory(category = null) {
    const filteredItems = category ? model.shop.filter(item => item.category === category) : model.shop;
    renderHtml(shopView(filteredItems));
}

function buyItem(price, itemName, itemQuantity, symbol) {
    const userInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
    const userMoney = userInventory.money;
    const existingItem = userInventory.items.find(item => item.name === itemName);
    const itemSymbol = model.shop.find(item => item.symbol === symbol);
    const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);

    if (userMoney >= price) {
        userInventory.money -= price;

        if (existingItem) {
            existingItem.quantity++; // fikse quantity. Skal ikke økes med 1, men med riktig quantity !! 
            console.log(existingItem.quantity);
        } else {
            const newItem = {
                name: itemName,
                quantity: itemQuantity, // fikse quantity i inventory
                symbol: itemSymbol.symbol,
            };
            userInventory.items.push(newItem);
        }
    } else {
        addMessage(messageLog, `Oh no, it seems you don't have enough money :(`);
    }

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

function increaseStockAndPrice(itemName) {
    const shopItem = model.shop.find(item => item.name === itemName);

    if (shopItem) {
        shopItem.quantity++;
        shopItem.price = shopItem.originalPrice * shopItem.quantity;
    }

    renderHtml(shopView());
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

    renderHtml(shopView());
}