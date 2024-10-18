function caveQuest(){


}

function attackCaveMonster(){
	let characterStats = model.stats.find(stat => stat.characterId === model.app.loggedInCharacterId);
	let characterCurrentHp = characterStats ? characterStats.currenthp : null;
	let characterAtk = characterStats.atk;
	let characterDef = characterStats.def;
	
	let caveMonsterStats = model.caveQuest[1];
	let caveMonsterCurrentHp = caveMonsterStats.currentHp;
	let caveMonsterAtk = caveMonsterStats.atk;
	let caveMonsterDef = caveMonsterStats.def;

	let caveMonsterDamageTaken = calculateDamage(characterAtk, caveMonsterDef);
	let characterDamageTaken = calculateDamage(caveMonsterAtk, characterDef);
	let monsterRemainingHp = caveMonsterCurrentHp - caveMonsterDamageTaken;
	let characterRemainingHp = characterCurrentHp - characterDamageTaken;

	console.log(`damage taken on cave monster ${caveMonsterDamageTaken}`)
	console.log(`damage recived from cave monster ${characterDamageTaken}`)
		
	console.log(`Your current hitpoints are ${characterRemainingHp}`)
	console.log(`Cave monster has ${monsterRemainingHp} hitpoints remaining`)

	// sette inn if statement for å se om placeholder hp er gitt og dermed minke 
	// mellomlarget hp hver gang slik at den fortsetter med lagret hp
	

	// while (characterCurrentHp <= 0 || caveMonsterCurrentHp <= 0) {
	// 	console.log(`Damage taken on cave monster ${calculateDamage(characterAtk, caveMonsterDef)}`)
	// 	console.log(`Damage recived from cave monster ${calculateDamage(caveMonsterAtk, characterDef)}`)
	// 	console.log(`Your current hitpoints are ${characterCurrentHp}`)
	// 	console.log(`Cave monster has ${caveMonsterCurrentHp} hitpoints remaining`)
	// }
}

function calculateDamage(atkLvl, defLvl) {
    let maxDamage = 1000;  
    let givenMaxDamage = (atkLvl / 100) * maxDamage;
    let takenMaxDamage = (defLvl / 100) * givenMaxDamage;
    let finalDamage = Math.floor(Math.random() * takenMaxDamage);

    return finalDamage;
}

