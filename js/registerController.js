function registerNewUser(password, email, username){
	let newUserId = model.users.length;  
	let validUsername=true;
	let validPassword=false;
	let validEmail=false;
	let countdown = 10;
	let registerReturnMessage = document.getElementById('registerUserInfo');


	for (i=0; i<model.users.length; i++) {
		if (username == model.users[i].username || email == model.users[i].email) {
			validUsername=false;
			registerReturnMessage.innerHTML = `Username or E-mail is aready in use by another account`;
			break;
		}
	}

	if (password.length<7){
		registerReturnMessage.innerHTML = 'Password does not meet the requirments, it must be minimum 7 letters or numbers'
	} else {
		validPassword=true;
	}

	if (email.includes('@')){
		validEmail=true
	} else {
		registerReturnMessage.innerHTML = 'E-mail adress does not meet the requirments';
	}

	if (validUsername && validPassword && validEmail) {
		model.users.push({
			userId: newUserId,
			password: password,
			email: email,
			username: username,
		});

		const intervalId = setInterval(function() {
			countdown--;
			registerReturnMessage.innerHTML = `Registration successful. Redirecting to login page in ${countdown} seconds. <span style="color:blue; text-decoration:underline; cursor:pointer;" onclick="goToLoginPage()">Click here</span> to return to login page now.`;
	
			if (countdown === 0 && currentPage === 'registerPage') {
				clearInterval(intervalId);  
				goToLoginPage();
			}
		}, 1000);
	}
}
// refactorere i mindre funksjoner
