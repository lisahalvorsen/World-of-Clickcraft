function useHealthPotion() {
	const characterStats = findCharacterStats(model.app.loggedInUser, model.app.loggedInCharacterId);
	const characterInventory = findCharacterInventory(model.app.loggedInUser, model.app.loggedInCharacterId);
	const messageLog = findCharacterMessageLog(model.app.loggedInUser, model.app.loggedInCharacterId);
	const healthPotion = characterInventory.items.find(item => item.name === 'Health potion');

	if (healthPotion.count <= 0) {
		messageLog.text.push('Oh no! You dont have any more health potions!')
	} else {
		if (characterStats.currenthp + 50 >= characterStats.hp) {
			characterStats.currenthp = characterStats.hp;
			healthPotion.count--;
			messageLog.text.push('You drink a health potion! You have full health')
		} else {
			characterStats.currenthp += 50;
			healthPotion.count--;
			messageLog.text.push('You drink a health potion! Your health have increased by 50!')
		}
	}
	gameTemplateView();
}