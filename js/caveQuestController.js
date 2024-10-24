let characterStats = model.stats.find(stat => stat.characterId === model.app.loggedInCharacterId);
let characterCurrentHp = characterStats ? characterStats.currenthp : null;
let characterAtk = characterStats.atk;
let characterDef = characterStats.def;

let caveMonsterStats = model.caveQuest[1];
let caveMonsterCurrentHp = caveMonsterStats.currentHp;
let caveMonsterAtk = caveMonsterStats.atk;
let caveMonsterDef = caveMonsterStats.def;
let caveMonsterPresent = true;
let caveBossPresent = false;
let stoneWallPresent = true;
let stoneCount = 8;
let keySelected = false;


// currentMission = model.caveQuest.name;
// currentQuestStep = model.caveQuest.currentMission;
// characterInventory = ...
//legge til health potion mulighet mid game.. endre characterCurrentHp
//koble til inventory



function attackBossMonster(){
	console.log('Kill that thang!')
}

function attackCaveMonster(){
	if (characterCurrentHp > 0 && caveMonsterCurrentHp > 0){
		let caveMonsterDamageTaken = calculateDamage(characterAtk, caveMonsterDef);
		let characterDamageTaken = calculateDamage(caveMonsterAtk, characterDef);
		let monsterRemainingHp = caveMonsterCurrentHp - caveMonsterDamageTaken;
		let characterRemainingHp = characterCurrentHp - characterDamageTaken;
		characterCurrentHp = characterRemainingHp;
		caveMonsterCurrentHp = monsterRemainingHp;

		if (characterCurrentHp <= 0) {
			console.log(`Oops! You are dead!`);
			goToGamePage();
		} else if (caveMonsterCurrentHp <=0) {
			caveMonsterPresent = false;

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
			console.log(`Your current hitpoints are ${characterCurrentHp}`)
			console.log(`Cave monster has ${caveMonsterCurrentHp} hitpoints remaining`)
		}
	} 
}

function getThroughStones(){
	if (model.caveQuest[0].progress === 1 && stoneWallPresent) {//for the correct user
		stoneCount--;
		console.log('You remove one stone...')
		if (stoneCount == 0){
			stoneWallPresent = false; 
			doorPresent = true;
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
		doorPresent = false;
		caveBossPresent = true;	
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
    let maxDamage = 1000;  
    let givenMaxDamage = (atkLvl / 100) * maxDamage;
    let takenMaxDamage = (defLvl / 100) * givenMaxDamage;
    let finalDamage = Math.floor(Math.random() * takenMaxDamage);

    return finalDamage;
}

// 0,1 *1000 = 10
// 0,1*10




