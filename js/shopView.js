function shopView() {
    document.getElementById('app').innerHTML = /*HTML*/ `  
        <div>
            <h1>Shop</h1>
            <div>
                <button onclick="drawShopItemsHtml('Equipment')">Equipment</button>
                <button onclick="drawShopItemsHtml('Clothing')">Clothing</button>
                <button onclick="drawShopItemsHtml('Pets')">Pets</button>
                <button onclick="drawShopItemsHtml('Weapons')">Weapons</button>
            </div>
            <div></div> <!-- ${drawShopItemsHtml()} -->
        </div>
    `;
}

function drawShopItemsHtml(category) {

    console.log(category);

    // for (const item of model.shop) {
    //     console.log(item);
    // }
}