let scene = 'Map';
let gameView = mapPageView()

function gameTemplateView() {

    model.app.currentPage = 'inGamePage';

    // inGameStats()

    document.getElementById('app').innerHTML = /*HTML*/`
    <div class='gameTemplate'>
    <header class=headerBar>
    
        <div class='headerHP'>
        ❤️: ${model.app.currentCharacterInfo.currenthp}/${model.app.currentCharacterInfo.hp}
        </div>
        <div class='headerGold'>
        🪙: ${model.app.currentCharacterInfo.money}
        </div>
        <div class='headerLevel'>
        Level: ${model.app.currentCharacterInfo.level}
        </div>
        <div class='headerXP'>
        XP: ${model.app.currentCharacterInfo.xp}
        </div>
        <div class='headerGameName'>
        <h1>${scene}</h1>
        </div>
        <div class='headerBtn'><button onclick='logOutButton()'>Log out</button></div>
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
            <br>
            <div class="showingMessages">
               ${model.app.currentCharacterInfo.messageLog.map(log => `<div>${log}</div><br>`).join('')}
            </div>
        </div>
    </div>

    <footer class=footerBar>
        <div class='footerAvatarDiv'>
        <img class='footerCharacterImage' src="${model.app.currentCharacterInfo.picture}" alt="">
        </div>
        <div class='footerStatsDiv'>
        <h3>STATS</h3>
        <br>
        <br>
        ATK: ${model.app.currentCharacterInfo.atk}
        <br>
        DEF: ${model.app.currentCharacterInfo.def}
        <br>
        SPD: ${model.app.currentCharacterInfo.spd}
        </div>
        <div class='footerEqiuppedItemsDiv'>
        <h3>EQUIPPED ITEMS</h3>
        <br>
        <br>
        WEAPON: ${model.app.currentCharacterInfo.weapon}
        <br>
        ARMOR: ${model.app.currentCharacterInfo.armor}
        <br>
        BOOTS: ${model.app.currentCharacterInfo.boots}
        </div>
        <div class='footerActionsDiv'>
        <h3>ACTIONS</h3>
        <br>
        <button class="inGameBtn">Attack</button>
        <br>
        <button class="inGameBtn" onclick='goBackToMap()'>Back</button>
        </div>
        <div class='footerInventoryDiv'>
            <h3>INVENTORY</h3>
            <div class="currentInventory">
                 <br>
                 ${model.app.currentCharacterInfo.currentInventory??''}
         </div>
        </div>
        <div class='footerMissionsDiv'>
            <h3>MISSION</h3>
            <br>
            <div class="currentMisson">
               Current Quest: ${model.app.currentCharacterInfo.currentQuest??''}
                <br>
                Quest step: ${model.app.currentCharacterInfo.currentQuestStep??''}
            </div>
        </div>
    </footer>
    </div>
    `;
    scrollToBottomOfMessages();
}
