function logInUser(username, password) {
	let loginReturnMessage = document.getElementById('loginUserInfo');
	let userExists = false;
	let validPassword = false;

	for (i = 0; i < model.users.length; i++) {
		if (username === model.users[i].username && password === model.users[i].password) {
			userExists = true;
			validPassword = true;

			if (userExists && validPassword) {
				userId = model.users[i].userId;
				model.app.loggedInUser = userId;

				const userHasCharacter = model.characters.some(character => character.userId === userId);
				if (!userHasCharacter) {
					goToCreateNewCharacterPage();
				} else {
					goToCharacterSelectionPage();
				}
				return;
			}
		}
	}
	if (!userExists || !validPassword) {
		loginReturnMessage.innerHTML = 'Incorrect username or password, please try again.';
	}
}
