function caveQuest(){




}

function attackCaveMonster(){
	monsterCurrentHp = model.caveQuest.currentHp;
	characterCurrentHp = model.characters.some(character => character.userId === loggedInCharacterId)
	// characterAttLvl = 
	// characterDefLvl = 
	// monsterAttLvl = 
	// monsterDefLvl = 


}

function calculateDamage(characterAttLvl, monsterDefLvl) {
    let maxDamage = 100;  
    let userMaxDamage = (characterAttLvl / 100) * maxDamage;
    let actualDamage = (monsterDefLvl / 100) * userMaxDamage;
    let finalDamage = Math.floor(Math.random() * actualDamage);

    return finalDamage;
}

