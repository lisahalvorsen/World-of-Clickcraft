function shopView() {
    document.getElementById('app').innerHTML = /*HTML*/ `  
        <div>
            <h1>Shop</h1>
            <div>
                <button>Equipment</button>
                <button>Clothing</button>
                <button>Pets</button>
                <button>Weapons</button>
            </div>
            <div>${drawShopItemsHtml()}</div>
        </div>
    `;
}

function drawShopItemsHtml() {
    for (const item of model.shop) {
        console.log(item);
    }
}