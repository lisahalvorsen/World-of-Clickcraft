function caveQuest(){




}

function attackCaveMonster(){
	let characterStats = model.stats.find(stat => stat.characterId === model.app.loggedInCharacterId);
	let characterCurrentHp = characterStats ? characterStats.currenthp : null;
	let characterAtk = characterStats.atk;
	let characterDef = characterStats.def;
	
	let caveMonsterStats = model.caveQuest[1];
	let caveMonsterCurrentHp = caveMonsterStats.currenthp;
	let caveMonsterAtk = caveMonsterStats.atk;
	let caveMonsterDef = caveMonsterStats.def;

	return (
	console.log(`damage taken on cave monster ${calculateDamage(characterAtk, caveMonsterDef)}`))

}

function calculateDamage(atkLvl, defLvl) {
    let maxDamage = 100;  
    let userMaxDamage = (atkLvl / 100) * maxDamage;
    let actualDamage = (defLvl / 100) * userMaxDamage;
    let finalDamage = Math.floor(Math.random() * actualDamage);

    return finalDamage;
}

