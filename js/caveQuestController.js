

// når man lager ny bruker må man legge til inventory og quests for denne bruker i modellen
// legge til health potion mulighet mid game.. endrer CurrentHp
// få loot fra quest/kill på bakken som går videre til inventory

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

	if (characterStats.currenthp > 0 && caveQuest[1].currentHp > 0){
		let caveMonsterDamageTaken = calculateDamage(characterStats.atk, caveMonsterStats.def);
		let characterDamageTaken = calculateDamage(caveMonsterStats.atk, characterStats.def);
		let monsterRemainingHp = caveMonsterStats.currentHp - caveMonsterDamageTaken;
		let characterRemainingHp = characterStats.currenthp - characterDamageTaken;
		characterStats.currenthp = characterRemainingHp;
		caveMonsterStats.currentHp = monsterRemainingHp;

		if (characterStats.currenthp <= 0) {
            addMessage(messageLog, `Oops! You are dead!`);
			characterStats.currenthp = characterStats.hp;

		} else if (caveMonsterStats.currentHp <=0) {
			caveQuest[1].caveMonsterPresent = false;
			caveQuest[0].currentQuestStep = 'Make your way though the obstacle';
			characterStats.xp += 100;
			characterStats.level ++;
			characterStats.atk ++;
			characterStats.def ++;
			characterStats.spd ++;

			//characterInventory
			// or drop money, key and health potions on floor first
			characterStats.money += 100;
			characterInventory.hasKey = true;
			caveQuest[0].progress++;
            addMessage(messageLog, `Monster successfully slayed, continue`);

		} else {
			addMessage(messageLog, `Damage taken on cave monster: ${caveMonsterDamageTaken}.`);
            addMessage(messageLog, `Damage received from cave monster: ${characterDamageTaken}.`);
            addMessage(messageLog, `Your current hitpoints are ${characterStats.currenthp}.`);
            addMessage(messageLog, `Cave monster has ${caveMonsterStats.currentHp} hitpoints remaining.`);
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
			 addMessage(messageLog, 'You remove one stone...');
		if (caveQuest[0].stoneCount == 0){
			caveQuest[0].stoneWallPresent = false; 
			caveQuest[0].doorPresent = true;
			 addMessage(messageLog, 'A door appear behind the stones.');
			characterStats.xp += 50;

		}
	} else {
		 addMessage(messageLog, 'You must slay the monster before approaching the door.');
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function getThroughDoor(){
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterStats = findCharacterStats (model.app.loggedInUser, model.app.loggedInCharacterId)
	const characterInventory = findCharacterInventory (model.app.loggedInUser, model.app.loggedInCharacterId)

	if (characterInventory.hasKey == true && characterInventory.keySelected == true){
		caveQuest[0].doorPresent = false;
		caveQuest[2].caveBossPresent = true;	
		 addMessage(messageLog, 'You unlock the door and enter a room where you see a HUGE creature!');
		caveQuest.currentQuestStep = 'Kill the Cave Boss';
		characterStats.xp += 50;
		characterStats.level ++;
	} else {
		 addMessage(messageLog, 'Perhaps I can use the key the monster dropped..?');
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function selectKey(){
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterInventory = findCharacterInventory (model.app.loggedInUser, model.app.loggedInCharacterId)

	characterInventory.keySelected = !characterInventory.keySelected; 
	addMessage(messageLog, characterInventory.keySelected ? 'Key selected' : 'Key unselected');
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





