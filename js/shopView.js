function shopView(items = model.shop) {
    document.getElementById('app').innerHTML = /*HTML*/ `  
        <div>
            <h1>Shop</h1>
            <div>🪙: ${getUserMoney()}</div>
            <div>
                <button onclick="getShopInventory('Equipment')">Equipment</button>
                <button onclick="getShopInventory('Clothing')">Clothing</button>
                <button onclick="getShopInventory('Pets')">Pets</button>
                <button onclick="getShopInventory('Weapons')">Weapons</button>
                <button onclick="getShopInventory()">All items</button>
            </div>
            ${drawAllShopItemsHtml(items)}
            <br>
            <button onclick="goBackToMap()">Exit shop</button>
        </div>
    `;
}

function drawAllShopItemsHtml(items) {
    let html = '';

    for (const item of items) {
        html += /*HTML*/ `
            <div>
                <img class="shopItems" src="${item.picture}" />
                <div class="itemName">${item.name} <img class="iIcon" src="../images/i-icon.png"/></div>
                <div>$ ${item.price}</div>
                <button onclick="buyItem()">Buy</button>
            </div>
        `;
    }
    return html;
}