


function caveQuestView() {
	const stoneWallElement = '🪨';
	const doorElement = '🚪';
	let stoneWallPresent = false;

    document.querySelector("sceneDiv").innerHTML = /*HTML*/ `
    <div class="caveQuestPage">
		<div> 
			<h2>Demi Boss</h2> 
			<img src="../images/boss.png" alt="Boss">
			<br><br><br><br><br>
		</div>
		<div> 
			<h2>Obsticale</h2> 
			${stoneWallPresent ? stoneWallElement : doorElement}
			<br><br><br><br><br>
		</div>
		<div> 
			<h2>Monster</h2> 
			<div onclick='attackCaveMonster()'>👹</div>
		</div>
    </div>
    `;
}
