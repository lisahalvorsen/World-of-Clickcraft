function logInUser(username, password){
	let loginReturnMessage = document.getElementById('loginUserInfo');
	let userExists=false;
	let validPassword=false;

	for (i=0; i<model.users.length; i++) {
		if (username === model.users[i].username && password === model.users[i].password) {
			userExists=true;
			validPassword=true;

			if (userExists && validPassword){
				userId = model.users[i].userId;

				if(model.characters.userId === userId){//or is true?
					loginReturnMessage.innerHTML = 'going to choose character'
					// goToChooseCharacter()
				} else {
					// goToCreateCharacter();
					loginReturnMessage.innerHTML = 'Going to create character'
				}
			return;
			} 
		}
	}
	if (!userExists || !validPassword) { 
		loginReturnMessage.innerHTML = 'Incorrect username or password, please try again.';
	}
}
