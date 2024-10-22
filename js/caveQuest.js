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


function caveQuest(){
	// currentMission = model.caveQuest.name;
	// currentQuestStep = model.caveQuest.currentMission;
	// caveMonsterPresent = true;
	if (caveMonsterPresent) {
	}
}

function attackBossMonster(){

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
			//caveMonsterPresent = false;

			// for the correct user V
			// model.stats.money+= 100;
			// model.inventory.key = true
			console.log(`Monster successfully slayed, continue`);
		} else {
			console.log(`damage taken on cave monster ${caveMonsterDamageTaken}`)
			console.log(`damage recived from cave monster ${characterDamageTaken}`)
				
			console.log(`Your current hitpoints are ${characterCurrentHp}`)
			console.log(`Cave monster has ${caveMonsterCurrentHp} hitpoints remaining`)
		}
	} 
}

function getThroughStones(){
	stoneCount--;
	if (stoneCount <= 0){
		stoneWallPresent = false; 
		doorPresent = true;
	}
}

function getThroughDoor(){
	//for correct character
	//if (model.inventories.key == clicked?){
		doorPresent = false;
		caveBossPresent = true;	
	//}
}

function calculateDamage(atkLvl, defLvl) {
    let maxDamage = 1000;  
    let givenMaxDamage = (atkLvl / 100) * maxDamage;
    let takenMaxDamage = (defLvl / 100) * givenMaxDamage;
    let finalDamage = Math.floor(Math.random() * takenMaxDamage);

    return finalDamage;
}

