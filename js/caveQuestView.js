
const stoneWallElement = '🪨';
const doorElement = '🚪';
const healthPotionElement = '🧪'

function caveQuestView() {

	return /*HTML*/`
	<div class="caveQuestPage">
		<div id='caveBoss'> 
			${showingCaveBoss()}
		</div>
		<br><br><br><br><br>
		<div id='caveObstacle'> 
		${showingObstacleElement()}
		</div>
		<br><br><br><br><br>
		<div id='caveMonster'> 
			${showingCaveMonster()}
		</div>
    </div>
    `;
}

function showingCaveBoss() {
	const width = updateEnemyHealthBar(2)
    const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
    if (caveQuest[2].caveBossPresent) {
        return /*HTML*/`
            <h2>Cave Boss</h2> 
            <div id="boss-health-bar-container">
                <span id="boss-health-text">Cave Boss HP</span>
                <div id="boss-health-bar">
                    <div id="boss-health-fill" style="width: ${width??100}%;"></div> 
                </div>
            </div>
            <img src="../images/boss.png" alt="Boss" onclick='attackBossMonster()'>
        `;
    } else {
        return '';
    }
}

function showingCaveMonster() {
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const width = updateEnemyHealthBar(1)

	if (caveQuest[1].caveMonsterPresent) {
		return /*HTML*/`
			<h2>Monster</h2> 

			<div id="monster-health-bar-container">
				<span id="monster-health-text">Cave Monster HP</span>
				<div id="monster-health-bar">
					<div id="monster-health-fill" style="width: ${width??100}%;"></div> 
			</div>
		</div>

			<div onclick='attackCaveMonster()'>👹</div>
		`;
	} else return '';
}

function showingObstacleElement() {
	const characterInventory = findCharacterInventory (model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	if (caveQuest[0].stoneWallPresent || caveQuest[0].doorPresent) {
		return /*HTML*/`
		<h2>Obstacle</h2> 
		<div onclick='${caveQuest[0].stoneWallPresent ? 'getThroughStones()' : 'getThroughDoor()'}'>	
			${caveQuest[0].stoneWallPresent ? stoneWallElement : doorElement}
		</div>
		<br>
		<div onclick='selectKey()'>${characterInventory.hasKey ? '🗝️' : ''}</div>
		`;
	} else return '';
}
