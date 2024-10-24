// let characterStats = model.stats.find(stat => stat.characterId === model.app.loggedInCharacterId);



let stoneCount = 8;
let keySelected = false;


// currentMission = model.caveQuest.name;
// currentQuestStep = model.caveQuest.currentMission;
// characterInventory = ...
//legge til health potion mulighet mid game.. endre characterCurrentHp
//koble til inventory
//fra consol log til chat

// my flytte    inGameStats() fra gameTemplateView() {
// og heller kalle den ved innlogging..

function attackBossMonster(){
	console.log('Kill that thang!')
}

function attackCaveMonster(){
	let caveMonsterStats = model.caveQuest[1];
	let currentCharacter = model.app.currentCharacterInfo;

	if (model.app.currentCharacterInfo.currenthp > 0 && caveMonsterStats.currentHp > 0){
		let caveMonsterDamageTaken = calculateDamage(currentCharacter.atk, caveMonsterStats.def);
		let characterDamageTaken = calculateDamage(caveMonsterStats.atk, currentCharacter.def);
		
		let monsterRemainingHp = caveMonsterStats.currentHp - caveMonsterDamageTaken;
		let characterRemainingHp = model.app.currentCharacterInfo.currenthp - characterDamageTaken;
		model.app.currentCharacterInfo.currenthp = characterRemainingHp;
		caveMonsterStats.currentHp = monsterRemainingHp;
		gameTemplateView();

		if (model.app.currentCharacterInfo.currenthp <= 0) {
			console.log(`Oops! You are dead!`);
			model.app.currentCharacterInfo.currenthp = model.app.currentCharacterInfo.hp;		gameView=mapPageView()
			goToGamePage();
		} else if (caveMonsterStats.currentHp <=0) {
			model.caveQuest[1].caveMonsterPresent = false;

			// for the correct user V
			// model.stats.money+= 100;
			model.inventories[0].hasKey = true;
			model.caveQuest[0].progress++;
			console.log(`Monster successfully slayed, continue`);
			gameView = caveQuestView()
			gameTemplateView();
		} else {
			console.log(`damage taken on cave monster ${caveMonsterDamageTaken}`)
			console.log(`damage recived from cave monster ${characterDamageTaken}`)
			console.log(`Your current hitpoints are ${model.app.currentCharacterInfo.currenthp}`)
			console.log(`Cave monster has ${caveMonsterStats.currentHp} hitpoints remaining`)
		}
	} 
}

function getThroughStones(){
	if (model.caveQuest[0].progress === 1 && model.caveQuest[0].stoneWallPresent) {//for the correct user
		model.caveQuest[0].stoneCount--;
		console.log('You remove one stone...')
		if (model.caveQuest[0].stoneCount == 0){
			model.caveQuest[0].stoneWallPresent = false; 
			model.caveQuest[0].doorPresent = true;
			console.log('A door appear behind the stones.')
			gameView = caveQuestView()
			gameTemplateView();
		}
	} else {
		console.log('You must slay the monster before approaching the door.')
	}
}

function getThroughDoor(){
	//for correct character
	if (model.inventories[0].hasKey == true && keySelected == true){
		model.caveQuest[0].doorPresent = false;
		model.caveQuest[2].caveBossPresent = true;	
		console.log('You unlock the door and enter a room where you see a HUGE creature!')
		gameView = caveQuestView()
		gameTemplateView();
	} else {
	console.log('Perhaps I can use the key the monster dropped..?')}
}

function selectKey(){
	keySelected = !keySelected; 
    console.log(keySelected ? 'Key selected' : 'Key unselected');
}


function calculateDamage(atkLvl, defLvl) {
    let maxDamage = 100;  
    let givenMaxDamage = (atkLvl / 100) * maxDamage;
	let damageReduction = (defLvl / 200); 
    let reducedDamage = givenMaxDamage * (1 - damageReduction); 
    let finalDamage = Math.floor(Math.random() * reducedDamage);

    return finalDamage;
}





