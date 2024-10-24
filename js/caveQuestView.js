
const stoneWallElement = '🪨';
const doorElement = '🚪';


function caveQuestView() {

    model.app.currentCharacterInfo.currentQuest = model.caveQuest[0].name;
    model.app.currentCharacterInfo.currentQuestStep = model.caveQuest[0].currentQuestStep;

	return /*HTML*/`
	<div class="caveQuestPage">
		<div id='caveBoss'> 
			${showingCaveBoss()}
		</div>
		<br><br><br><br><br>
		<div id='caveObsticale'> 
		${showingObsticaleElement()}
		</div>
		<br><br><br><br><br>
		<div id='caveMonster'> 
			${showingCaveMonster()}
		</div>
    </div>
    `;
}

function showingCaveBoss(){
	if (model.caveQuest[2].caveBossPresent) {
		return /*HTML*/`
		<h2>Cave Boss</h2> 
		<img src="../images/boss.png" alt="Boss" onclick='attackBossMonster()'>
		`;
	} else return '';
}

function showingCaveMonster(){
	if (model.caveQuest[1].caveMonsterPresent) {
		return /*HTML*/`
			<h2>Monster</h2> 
			<div onclick='attackCaveMonster()'>👹</div>
		`;
	} else return '';
}

function showingObsticaleElement(){
	if (model.caveQuest[0].stoneWallPresent || model.caveQuest[0].doorPresent) {
		return /*HTML*/`
		<h2>Obsticale</h2> 
		<div onclick='${model.caveQuest[0].stoneWallPresent ? 'getThroughStones()' : 'getThroughDoor()'}'>	
			${model.caveQuest[0].stoneWallPresent ? stoneWallElement : doorElement}
		</div>
		<br>
		<div onclick='selectKey()'>${model.inventories[0].hasKey? '🗝️' :''}</div>
		`;
	} else return '';
}
