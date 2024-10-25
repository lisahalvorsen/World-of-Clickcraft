function shopView() {
    document.getElementById('app').innerHTML = /*HTML*/ `  
        <div>
            <h1>Shop</h1>
            <div class='headerGold'>
                🪙: ${model.app.currentCharacterInfo.money}
            </div>
            <div>
                <button onclick="drawShopItemsHtml('Equipment')">Equipment</button>
                <button onclick="drawShopItemsHtml('Clothing')">Clothing</button>
                <button onclick="drawShopItemsHtml('Pets')">Pets</button>
                <button onclick="drawShopItemsHtml('Weapons')">Weapons</button>
            </div>
            <div id="items"></div>
            <button onclick="goBackToMap()">Exit</button>
        </div>
    `;
}

function drawShopItemsHtml(category = null) {
    let html = '';

    for (const item of model.shop) {
        if (!category || item.category === category) {
            html += /*HTML*/ `                 
            <img class="shopItems" src="${item.picture}" />
            <div class="itemName">${item.name}</div>                 
            <div>$ ${item.price}</div>                  
            <button onclick="buyItem()">Buy</button>             
            `;
        }
    }
    document.getElementById('items').innerHTML = html; // endre på denne (?) + legge til bilder + CSS
}