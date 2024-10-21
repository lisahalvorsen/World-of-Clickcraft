let scene = 'Map';
let isInMap = true;
let gold = 0;
let hp = 0;
let level = 0;
let xp = 0;
let atk = 0;
let def = 0;
let spd = 0;
let weapon = '';
let armor = '';
let boots = '';

function gameTemplateView() {

    model.app.currentPage = 'inGamePage';

    document.getElementById('app').innerHTML= /*HTML*/`
    <div class='gameTemplate'>
    <header class=headerBar>
        <div class='headerHP'>
        ❤️: ${hp}
        </div>
        <div class='headerGold'>
        🪙: ${gold}
        </div>
        <div class='headerLevel'>
        Level: ${level}
        </div>
        <div class='headerXP'>
        XP: ${xp}
        </div>
        <div class='headerGameName'>
        <h1>${scene}</h1>
        </div>
        <div class='headerChangeChar' onclick='goToCharacterSelectionPage()'>
        🔁Change Character 
        </div>
    </header>
    <div class='sceneDiv'>
        ${isInMap?mapPageView():''}
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
        WEAPON: ${weapon}
        </br>
        ARMOR: ${armor}
        </br>
        BOOTS: ${boots}
        </div>
        <div class='footerActionsDiv'>
        <h3>ACTIONS</h3>
        </br>
        <button>Attack</button>
        </br>
        <button>Back</button>
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
    inGameStats()
}


function inGameStats() {
    let userId = model.app.userId
    let userStats = model.stats.filter(userStat => {userStat.userId === userId })
    let userEquipments = model.equippedItems.filter(userEquipment =>{userEquipment.userId === userId})
    let weaponId = userEquipments[0].weaponId
    let armorId = userEquipments[0].armorId
    let bootsId = userEquipments[0].bootsId
    let userWeapon = model.weapons.filter(weapon => {weapon.id === weaponId})
    let userArmor = model.armor.filter(armor => {armor.id === armorId})
    let userBoots = model.boots.filter(boots =>{boots.id === bootsId})

    gold = userStats[0].money
    hp = userStats[0].hp
    level = userStats[0].level
    xp = userStats[0].xp
    weapon = userWeapon[0].name
    armor = userArmor[0].name
    boots = userBoots[0].name
    gameTemplateView()
}

// headerChangeChar - onclick til change character

//sample area 
