function gameTemplateView() {

    model.app.currentPage = 'inGamePage';

    document.getElementById('app').innerHTML = /*HTML*/`
    <div class='gameTemplate'>
    <header class=headerBar>
        <div class='headerHP'>
        ❤️: 100
        </div>
        <div class='headerGold'>
        🪙: 1000
        </div>
        <div class='headerLevel'>
        Level: 1
        </div>
        <div class='headerXP'>
        XP: 100/150
        </div>
        <div class='headerGameName'>
        <h1>World Of ClickCraft</h1>
        </div>
        <div class='headerChangeChar'>
        🔁Change Character 
        </div>
    </header>
    <div class='sceneDiv'>
    </div>

    <div class='messagesDiv'>
        <div class='messages'>
        <h3>MESSAGES</h3>
        </div>
    </div>

    <footer class=footerBar>
        <div class='footerAvatarDiv'>
        </div>
        <div class='footerStatsDiv'>
        <h3>STATS</h3>
        </br>
        </br>
        ATK:
        </br>
        DEF:
        </br>
        SPD:
        </div>
        <div class='footerEqiuppedItemsDiv'>
        <h3>EQUIPPED ITEMS</h3>
        </br>
        </br>
        WEAPON:
        </br>
        ARMOR:
        </br>
        BOOTS:
        </div>
        <div class='footerActionsDiv'>
        <h3>ACTIONS</h3>
        </br>
        <button class="inGameBtn">Attack</button>
        </br>
        <button class="inGameBtn">Back</button>
        </div>
        <div class='footerInventoryDiv'>
        <h3>INVENTORY</h3>
        </div>
        <div class='footerMissionsDiv'>
        <h3>MISSION</h3>
        </div>
    </footer>
    </div>
    `;
}

// headerChangeChar - onclick til change character

//sample area 

