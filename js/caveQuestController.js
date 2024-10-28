
	characterInventory.keySelected = false;
//common
function findCharacterMessageLog(userId, characterId) {
    return model.messageLog.find(msg => msg.userId === userId && msg.characterId === characterId);
}
function findCharacterInventory(userId, characterId) {
    return model.inventories.find(invent => invent.userId === userId && invent.characterId === characterId);
}
function findCharacterCaveQuest(userId, characterId) {
    return model.caveQuest.filter(id => id.userId === userId && id.characterId === characterId);
}
function findCharacterStats(userId, characterId) {
    return model.stats.find(userStat => userStat.userId === userId && userStat.characterId === characterId);
}


//legge til caveQuest[0].currentQuestStep i modellen

// koble til inventory
// legge til health potion mulighet mid game.. endrer characterCurrentHp
// koble quest til hver enkelt bruker
// få loot fra quest/kill

function attackBossMonster(){
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	messageLog.text.push('Kill that thang!');

	gameView = caveQuestView();
	gameTemplateView();
}

function attackCaveMonster(){
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterStats = findCharacterStats (model.app.loggedInUser, model.app.loggedInCharacterId)
	const characterInventory = findCharacterInventory (model.app.loggedInUser, model.app.loggedInCharacterId)
	let caveMonsterStats = caveQuest[1];

	if (characterStats.currenthp > 0 && caveMonsterStats.currentHp > 0){
		let caveMonsterDamageTaken = calculateDamage(characterStats.atk, caveMonsterStats.def);
		let characterDamageTaken = calculateDamage(caveMonsterStats.atk, characterStats.def);
		let monsterRemainingHp = caveMonsterStats.currentHp - caveMonsterDamageTaken;
		let characterRemainingHp = characterStats.currenthp - characterDamageTaken;
		characterStats.currenthp = characterRemainingHp;
		caveMonsterStats.currentHp = monsterRemainingHp;

		if (characterStats.currenthp <= 0) {
			messageLog.text.push(`Oops! You are dead!`);
			characterStats.currenthp = characterStats.hp;

		} else if (caveMonsterStats.currentHp <=0) {
			model.caveQuest[1].caveMonsterPresent = false;
			caveQuest[0].currentQuestStep = 'Make your way though the obstacle';
			characterStats.xp += 100;
			characterStats.level ++;
			characterStats.atk ++;
			characterStats.def ++;
			characterStats.spd ++;

			//characterInventory
			// or drop money, key and health potions on floor first
			characterStats.money += 100;
			model.inventories[0].hasKey = true;
			model.caveQuest[0].progress++;
			messageLog.text.push(`Monster successfully slayed, continue`);

		} else {
			messageLog.text.push(`Damage taken on cave monster: ${caveMonsterDamageTaken}.`)
			messageLog.text.push(`Damage recived from cave monster: ${characterDamageTaken}.`)
			messageLog.text.push(`Your current hitpoints are ${characterStats.currenthp}.`)
			messageLog.text.push(`Cave monster has ${caveMonsterStats.currentHp} hitpoints remaining.`)
		}
	} 
	gameView = caveQuestView();
	gameTemplateView();
}

function getThroughStones(){
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterStats = findCharacterStats (model.app.loggedInUser, model.app.loggedInCharacterId)

		if (caveQuest[0].progress === 1 && caveQuest[0].stoneWallPresent) {
			caveQuest[0].stoneCount--;
			messageLog.text.push('You remove one stone...');
		if (caveQuest[0].stoneCount == 0){
			caveQuest[0].stoneWallPresent = false; 
			caveQuest[0].doorPresent = true;
			messageLog.text.push('A door appear behind the stones.');
			characterStats.xp += 50;

		}
	} else {
		messageLog.text.push('You must slay the monster before approaching the door.');
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function getThroughDoor(){
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterStats = findCharacterStats (model.app.loggedInUser, model.app.loggedInCharacterId)
	const characterInventory = findCharacterInventory (model.app.loggedInUser, model.app.loggedInCharacterId)

	//for correct character
	if (characterInventory.hasKey == true && characterInventory.keySelected == true){
		caveQuest[0].doorPresent = false;
		caveQuest[2].caveBossPresent = true;	
		messageLog.text.push('You unlock the door and enter a room where you see a HUGE creature!');
		caveQuest.currentQuestStep = 'Kill the Cave Boss';
		characterStats.xp += 50;
		characterStats.level ++;
	} else {
		messageLog.text.push('Perhaps I can use the key the monster dropped..?');
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function selectKey(){
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);

	characterInventory.keySelected = !characterInventory.keySelected; 
	messageLog.text.push(characterInventory.keySelected ? 'Key selected' : 'Key unselected');
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





