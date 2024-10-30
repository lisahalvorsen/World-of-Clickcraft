function attackBossMonster() {
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const bossStats = caveQuest[2];
	const characterStats = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterInfo = findCharacterInfo(model.app.loggedInUser, model.app.loggedInCharacterId);
	let questStatus = findQuestStatus(model.app.loggedInUser, model.app.loggedInCharacterId)

	if (characterStats.currenthp > 0 && bossStats.currentHp > 0) {
		let playerDamageTaken = calculateDamage(bossStats.atk, characterStats.def);
		let bossDamageTaken = calculateDamage(characterStats.atk, bossStats.def);
		if (bossStats.currentHp < bossStats.hp * 0.5 && bossStats.currentHp > bossStats.hp * 0.2) {
			addMessage(messageLog,"The boss roars furiously, unleashing a devastating attack!");
			playerDamageTaken = Math.floor(playerDamageTaken * 1.5);
		} else if (bossStats.currentHp <= bossStats.hp * 0.2) {
			addMessage(messageLog,"The boss enters its final rage phase, becoming unstoppable!");
			playerDamageTaken = Math.floor(playerDamageTaken * 2);
			bossDamageTaken = Math.floor(bossDamageTaken * 0.8);
		}
		characterStats.currenthp -= playerDamageTaken;
		bossStats.currentHp -= bossDamageTaken;
		addMessage(messageLog,
			`You strike the boss, dealing ${bossDamageTaken} damage! The
			boss retaliates, dealing ${playerDamageTaken} damage!`
		);
	}

	if (characterStats.currenthp <= 0) {
		addMessage(messageLog,"Oops! You are dead!! The boss stands victorious.");
		characterStats.currenthp = characterStats.hp;
		bossStats.currentHp = bossStats.hp;
		characterInfo.currentQuestStep = 'Kill the Cave Boss!';
		caveQuest[0].currentQuestStep = 'Kill the Cave Boss!';
		goBackToMap();
		gameTemplateView();
		return;
	} else if (bossStats.currentHp <= 0) {
		bossStats.caveBossPresent = false;
		characterInfo.currentQuest = 'Desert quest!'
		characterInfo.currentQuestStep = '';
		caveQuest[0].currentQuestStep = '';
		caveQuest[0].questFinished = true;
		questStatus.caveQuest = true
		addMessage(messageLog,
			`With a final blow, you defeat the Cave Boss!
			The boss lets out a roar as it falls, leaving behind precious loot.`
		);
		grantBossRewards(characterStats, messageLog);
		questUpdater('Cave', 'Desert')
		bossStats.currentHp = bossStats.hp;
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function grantBossRewards(character, messageLog) {
	const characterInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
	const healthPotion = characterInventory.items.find(item => item.name === 'Health potion');
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);

	caveQuest[0].questFinished=true;
	character.hp += 50;
	character.currentHp += 50;
	character.atk += 9;
	character.def += 9;
	character.spd += 9;
	character.level += 5;
	character.xp += 500;
	characterInventory.money += 500;
	healthPotion.count += 5;
	const rareDropChance = Math.random();

	if (rareDropChance < 0.2) {
		addMessage(messageLog,"Rare drop: The monster dropped an additional 500 money!");
		characterInventory.money += 500;
	}
	addMessage(messageLog,
		`Rewards: Increased stats and xp, +500 Gold, +5 Health Potions.`,
		`Congratulations! You have emerged victorious from the boss battle.`,
		`Return to the map to find another quest, defeat a boss, or visit the town!`
	);
}


 function attackCaveMonster() {
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterStats = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId)
	const characterInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId)
	const characterInfo = findCharacterInfo(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveMonsterStats = caveQuest[1];

	if (characterStats.currenthp > 0 && caveQuest[1].currentHp > 0) {
		let caveMonsterDamageTaken = calculateDamage(characterStats.atk, caveMonsterStats.def);
		let characterDamageTaken = calculateDamage(caveMonsterStats.atk, characterStats.def);
		let monsterRemainingHp = caveMonsterStats.currentHp - caveMonsterDamageTaken;
		let characterRemainingHp = characterStats.currenthp - characterDamageTaken;
		characterStats.currenthp = characterRemainingHp;
		caveMonsterStats.currentHp = monsterRemainingHp;

		if (characterStats.currenthp <= 0) {
			addMessage(messageLog, `Oops! You are dead!`);
			characterStats.currenthp = characterStats.hp;
			gameView = mapPageView()
			goToGamePage();
			gameTemplateView();
			return;

		} else if (caveMonsterStats.currentHp <= 0) {
			caveQuest[1].caveMonsterPresent = false;
			characterInfo.currentQuestStep = 'Make your way though the obstacle';
			caveQuest[0].currentQuestStep = 'Make your way though the obstacle';
			characterStats.xp += 100;
			characterStats.level++;
			characterStats.atk++;
			characterStats.def++;
			characterStats.spd++;
			characterStats.hp += 20;
			characterStats.currentHp += 20;

			characterStats.money += 100;
			characterInventory.hasKey = true;
			caveQuest[0].progress++;
			addMessage(messageLog, `Monster successfully slayed, continue`,
				`Rewards: Increased stats and XP`,
			);

		} else {
			addMessage(messageLog,
				`You strike the cave monster, dealing ${caveMonsterDamageTaken} damage! The 
				cave monster retaliates, dealing ${characterDamageTaken} damage!`
			);
		}
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function getThroughStones() {
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterStats = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId)

	if (caveQuest[0].progress === 1 && caveQuest[0].stoneWallPresent) {
		caveQuest[0].stoneCount--;
		addMessage(messageLog, 'You remove one stone...');
		if (caveQuest[0].stoneCount == 0) {
			caveQuest[0].stoneWallPresent = false;
			caveQuest[0].doorPresent = true;
			addMessage(messageLog, 'A door appear behind the stones.');
			addMessage(messageLog, `Rewards: Increased XP`);

			characterStats.xp += 50;

		}
	} else {
		addMessage(messageLog, 'You must slay the monster before approaching the door.');
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function getThroughDoor() {
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const caveQuest = findCharacterCaveQuest(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterStats = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId)
	const characterInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId)
	const characterInfo = findCharacterInfo(model.app.loggedInUser, model.app.loggedInCharacterId);

	if (characterInventory.hasKey == true && characterInventory.keySelected == true) {
		caveQuest[0].doorPresent = false;
		caveQuest[2].caveBossPresent = true;
		addMessage(messageLog, 'You unlock the door and enter a room where you see a HUGE creature!');
		addMessage(messageLog, `Rewards: Increased stats and XP`);
		characterInfo.currentQuestStep = 'Kill the Cave Boss';
		characterStats.xp += 50;
		characterStats.level++;
	} else {
		addMessage(messageLog, 'Perhaps I can use the key the monster dropped..?');
	}
	gameView = caveQuestView();
	gameTemplateView();
}

function selectKey() {
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId)

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





