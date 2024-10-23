let scene = 'Map';
let gameView = mapPageView()
let selectedCharactedStats
let weapon = '';
let armor = '';
let boots = '';


function gameTemplateView() {

    model.app.currentPage = 'inGamePage';

    inGameStats()

    document.getElementById('app').innerHTML = /*HTML*/`
    <div class='gameTemplate'>
    <header class=headerBar>
        <div class='headerHP'>
        ❤️: ${selectedCharactedStats.currenthp}/${selectedCharactedStats.hp}
        </div>
        <div class='headerGold'>
        🪙: ${selectedCharactedStats.money}
        </div>
        <div class='headerLevel'>
        Level: ${selectedCharactedStats.level}
        </div>
        <div class='headerXP'>
        XP: ${selectedCharactedStats.xp}
        </div>
        <div class='headerGameName'>
        <h1>${scene}</h1>
        </div>
        <div class='headerChangeChar' onclick='goToCharacterSelectionPage()' >
        🔁Change Character 
        </div>
    </header>
    <div class='sceneDiv'>
        ${gameView}
    </div>
    <div class='messagesDiv'>
        <div class='messages'>
        <h3>MESSAGES</h3>
        </div>
    </div>

    <footer class=footerBar>
        <div class='footerAvatarDiv'>
        <img class='footerCharacterImage' src="${selectedCharactedStats.picture}" alt="">
        </div>
        <div class='footerStatsDiv'>
        <h3>STATS</h3>
        </br>
        </br>
        ATK: ${selectedCharactedStats.atk}
        </br>
        DEF: ${selectedCharactedStats.def}
        </br>
        SPD: ${selectedCharactedStats.spd}
        </div>
        <div class='footerEqiuppedItemsDiv'>
        <h3>EQUIPPED ITEMS</h3>
        </br>
        </br>
        WEAPON: ${weapon}
        </br>
        ARMOR: ${armor}
        </br>
        BOOTS: ${boots}
        </div>
        <div class='footerActionsDiv'>
        <h3>ACTIONS</h3>
        </br>
        <button class="inGameBtn">Attack</button>
        </br>
        <button class="inGameBtn" onclick='goBackToMap()'>Back</button>
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

function inGameStats() {
    let UserId = model.app.loggedInUser
    let characterId = model.app.loggedInCharacterId
    let userStats = model.stats.find(userStat => userStat.userId === UserId && userStat.characterId === characterId)
    selectedCharactedStats = userStats
    let userEquipments = model.equippedItems.find(userEquipment => userEquipment.userId === UserId)
    let userWeapon = model.weapons.find(weapon => weapon.id === userEquipments.weaponId)
    let userArmor = model.armors.find(armor => armor.id === userEquipments.armorId)
    let userBoots = model.boots.find(boots => boots.id === userEquipments.bootsId)

    weapon = userWeapon.name
    armor = userArmor.name
    boots = userBoots.name
}
