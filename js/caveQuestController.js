
let keySelected = false;
//legge til health potion mulighet mid game.. endrer characterCurrentHp
//koble til inventory
//koble quest til hver enkelt bruker somehow
//øke xp og loot fra quest/kill

function attackBossMonster(){
	model.app.currentCharacterInfo.messageLog.push('Kill that thang!')
	gameView = caveQuestView();
	gameTemplateView();
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
			model.app.currentCharacterInfo.messageLog.push(`Oops! You are dead!`);
			model.app.currentCharacterInfo.currenthp = model.app.currentCharacterInfo.hp;

		} else if (caveMonsterStats.currentHp <=0) {
			model.caveQuest[1].caveMonsterPresent = false;
			model.app.currentCharacterInfo.currentQuestStep = 'Make your way though the obstacle';

			// for the correct user V or drop on floor first
			// model.stats.money+= 100;

			model.inventories[0].hasKey = true;
			model.caveQuest[0].progress++;
			model.app.currentCharacterInfo.messageLog.push(`Monster successfully slayed, continue`);

		} else {
			model.app.currentCharacterInfo.messageLog.push(`Damage taken on cave monster: ${caveMonsterDamageTaken}.`)
			model.app.currentCharacterInfo.messageLog.push(`Damage recived from cave monster: ${characterDamageTaken}.`)
			model.app.currentCharacterInfo.messageLog.push(`Your current hitpoints are ${model.app.currentCharacterInfo.currenthp}.`)
			model.app.currentCharacterInfo.messageLog.push(`Cave monster has ${caveMonsterStats.currentHp} hitpoints remaining.`)
		}
	} 
	gameView = caveQuestView();
	gameTemplateView();
}

function getThroughStones(){
	//for the correct user
	if (model.caveQuest[0].progress === 1 && model.caveQuest[0].stoneWallPresent) {
		model.caveQuest[0].stoneCount--;
		model.app.currentCharacterInfo.messageLog.push('You remove one stone...');
		if (model.caveQuest[0].stoneCount == 0){
			model.caveQuest[0].stoneWallPresent = false; 
			model.caveQuest[0].doorPresent = true;
			model.app.currentCharacterInfo.messageLog.push('A door appear behind the stones.')
		}
	} else {
		model.app.currentCharacterInfo.messageLog.push('You must slay the monster before approaching the door.')
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function getThroughDoor(){
	//for correct character
	if (model.inventories[0].hasKey == true && keySelected == true){
		model.caveQuest[0].doorPresent = false;
		model.caveQuest[2].caveBossPresent = true;	
		model.app.currentCharacterInfo.messageLog.push('You unlock the door and enter a room where you see a HUGE creature!')
		model.app.currentCharacterInfo.currentQuestStep = 'Kill the Cave Boss'

	} else {
		model.app.currentCharacterInfo.messageLog.push('Perhaps I can use the key the monster dropped..?')
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function selectKey(){
	keySelected = !keySelected; 
    model.app.currentCharacterInfo.messageLog.push(keySelected ? 'Key selected' : 'Key unselected');
	gameView = caveQuestView();
	gameTemplateView();
}


function calculateDamage(atkLvl, defLvl) {
    let maxDamage = 100;  
    let givenMaxDamage = (atkLvl / 100) * maxDamage;
	let damageReduction = (defLvl / 200); 
    let reducedDamage = givenMaxDamage * (1 - damageReduction); 
    let finalDamage = Math.floor(Math.random() * reducedDamage);

    return finalDamage;
}





