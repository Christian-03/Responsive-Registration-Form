const forms = document.getElementById('forms');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

forms.addEventListener('submit', e => {
	e.preventDefault();
	let messages = []
    if(firstnameValue === '') {
		setErrorFor(firstname, 'First Name cannot be empty')
	} 
	}
    if(lastnameValue === '') {
		setErrorFor(lastname, 'Last Name cannot be empty')
	}
	if(emailValue === '') {
		setErrorFor(email, 'Looks like this is not an email')
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password empty');
	}
});

	
function setErrorFor(input, message) {
	const forms = input.parentElement;
	const small = forms.querySelector('small');
	forms.className = 'forms error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const forms = input.parentElement;
	forms.className = 'forms success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}