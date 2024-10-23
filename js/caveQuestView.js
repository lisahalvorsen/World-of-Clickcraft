
const stoneWallElement = '🪨';
const doorElement = '🚪';


function caveQuestView() {
	// document.querySelector(".sceneDiv").innerHTML = /*HTML*/ `
	// return /*HTML*/`
    // document.getElementById("app").innerHTML = /*HTML*/ 
	// `
    return `<div class="caveQuestPage">
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
	if (caveBossPresent) {
		return /*HTML*/`
		<h2>Cave Boss</h2> 
		<img src="../images/boss.png" alt="Boss" onclick='attackBossMonster()'>
		`;
	} else return '';
}

function showingCaveMonster(){
	if (caveMonsterPresent) {
		return /*HTML*/`
			<h2>Monster</h2> 
			<div onclick='attackCaveMonster()'>👹</div>
		`;
	} else return '';
}

function showingObsticaleElement(){
	if (stoneWallPresent || doorPresent) {
		return /*HTML*/`
		<h2>Obsticale</h2> 
		<div onclick='${stoneWallPresent ? 'getThroughStones()' : 'getThroughDoor()'}'>	
			${stoneWallPresent ? stoneWallElement : doorElement}
		</div>
		<br>
		<div onclick='selectKey()'>${model.inventories[0].hasKey? '🗝️' :''}</div>
		`;
	} else return '';
}
