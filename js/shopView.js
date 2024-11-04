function shopView(items = model.shop) {
    model.app.inGameScene = 'Shop';

    return /*HTML*/ `  
        <div id="shopContainer">
            <div>
                <button onclick="getShopInventory('Clothing')" class="categoryBtn">Clothing</button>
                <button onclick="getShopInventory('Consumables')" class="categoryBtn">Consumables</button>
                <button onclick="getShopInventory('Equipment')" class="categoryBtn">Equipment</button>
                <button onclick="getShopInventory('Pets')" class="categoryBtn">Pets</button>
                <button onclick="getShopInventory()" class="categoryBtn">All items</button>
            </div>
                <div class="itemContainer">${drawAllShopItemsHtml(items)}</div>
        </div>
    `;
}

function drawAllShopItemsHtml(items) {
    let html = '';

    for (const item of items) {
        html += /*HTML*/ `
            <div class="items">
                <div class="itemPicture">${item.symbol}</div>
                <div class="itemName">${item.name} <img class="iIcon" src="images/i-icon.png" onclick="getMoreInfo('${item.name}')"/></div>
                <div class="itemPrice">$ ${item.price}</div>
                <div class="itemQuantity">
                    <button onclick="decreaseStockAndPrice('${item.name}')" class="adjustBtn">-</button>
                    ${item.quantity}
                    <button onclick="increaseStockAndPrice('${item.name}')" class="adjustBtn">+</button>
                </div>
                <button onclick="buyItem(${item.price}, '${item.name}', ${item.quantity}, '${item.symbol}', '${item.category}')" class="buyBtn">Buy</button>
            </div>
        `;
    }
    return html;
}

function showItemView(itemName, itemDsecription) {
    return /*HTML*/ `
    <div class="itemDescription">
        <div class="itemName">${itemName}</div>
        <div>${itemDsecription}</div>
        <button onclick="goToShop()" class="exitBtn">X</button>
    </div>    
    `;
}