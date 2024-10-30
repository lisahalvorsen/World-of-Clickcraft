let gameView = mapPageView()

function gameTemplateView() {
    const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
    const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
    const characterStats = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId);
    const characterInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
    const characterInfo = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId);
    const characterEquipped = findCharacterEquipped(model.app.loggedInUser, model.app.loggedInCharacterId);
    const width = updateCharacterHealthBar(characterStats.currenthp, characterStats.hp);

    document.getElementById('app').innerHTML = /*HTML*/`
    <div class='gameTemplate'>
    <header class=headerBar>
    
        <div class='headerHP'>
            ❤️: ${characterStats.currenthp}/${characterStats.hp}
            <div id="character-health-bar-container">
                <div id="character-health-bar">
                    <div id="character-health-fill" style="width: ${width}%;"></div> 
                </div>
            </div>
        </div>
        <div class='headerGold'>
        🪙: ${characterInventory.money}
        </div>
        <div class='headerLevel'>
        Level: ${characterStats.level}
        </div>
        <div class='headerXP'>
        XP: ${characterStats.xp}
        </div>
        <div class='headerGameName'>
        <h1>${model.app.inGameScene}</h1>
        </div>
        <div class='headerBtn'><button onclick='logOutButton()'>Log out</button></div>
        <div class='headerChangeChar' onclick='goToCharacterSelectionPage()' >
        <p>🔁 Change Character </p>
        </div>
    </header>
     <div class='sceneDiv'>
         ${gameView}
    </div>
    <div class='messagesDiv'>
        <div class='messages'>
            <h3>MESSAGES</h3>
            <br>
            <div class="showingMessages">
            ${messageLog.text.map(log => `<div>${log}</div><br>`).join('')}
        </div>
        </div>
    </div>

    <footer class=footerBar>
        <div class='footerAvatarDiv'>
        <img class='footerCharacterImage' src="${characterInfo.picture}" alt="">
        </div>
        <div class='footerStatsDiv'>
        <h3>STATS</h3>
        <br>
        <br>
        ATK: ${characterStats.atk}
        <br>
        DEF: ${characterStats.def}
        <br>
        SPD: ${characterStats.spd}
        </div>
        <div class='footerEqiuppedItemsDiv'>
        <h3>EQUIPPED ITEMS</h3>
        <br>
        <br>
        WEAPON: ${model.weapons[characterEquipped.weaponId - 1].name}
        <br>
        ARMOR: ${model.armors[characterEquipped.armorId - 1].name}
        <br>
        BOOTS: ${model.boots[characterEquipped.bootsId - 1].name}
        </div>
        <div class='footerActionsDiv'>
        <h3>Return To Map</h3>
        <br>
         <!--<button class="inGameBtn">Attack</button>
         <br>
         <button class="inGameBtn" onclick='goBackToMap()'>Back</button>-->
        <img class='returnMap' onclick='goBackToMap()'>

        </div>
        <div class='footerInventoryDiv'>
            <h3>INVENTORY</h3>
            <div class="currentInventory">
                 ${characterInventory.items.map(item => `<div onclick="${item.name === 'Health potion' ? 'useHealthPotion()' : ''}">${item.symbol} x ${item.count}</div>`).join('')}              
            </div>
        </div>
        <div class='footerMissionsDiv'>
            <h3>MISSION</h3>
            <br>
            <div class="currentMisson">
               Current Quest: ${characterInfo.currentQuest ?? ''}
                <br>
                Quest step: ${characterInfo.currentQuestStep ?? ''}
            </div>
        </div>
    </footer>
    </div>
    `;
    scrollToBottomOfMessages();
}
