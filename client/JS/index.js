/* eslint-disable indent */
/* eslint-disable arrow-parens */
/* eslint-disable no-use-before-define */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
const form = document.getElementById('form');
const formContainer = document.getElementsByClassName('wrap-form-container')[0];

const username = document.getElementById('username');
const link = document.getElementById('link');
const description = document.getElementById('description');
const category = document.getElementById('category');
const cancel = document.getElementById('cancel-icon');

form.addEventListener('submit', e => {
	 e.preventDefault();
	 checkInputs();
});

cancel.addEventListener('click', () => {
	formContainer.style.display = 'none';
});
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const linkValue = link.value.trim();
	const descriptionValue = description.value.trim();
	const categoryValue = category.value.trim();
	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
  }
  if (linkValue === '') {
    setErrorFor(link, 'link cannot be blank')
  }
  else {
		setSuccessFor(link);
	}
	if (descriptionValue === '') {
		setErrorFor(description, 'description cannot be blank');
	} else {
		setSuccessFor(description);
	}
		if (categoryValue === '') {
		setErrorFor(category, 'category cannot be blank');
	} else {
		setSuccessFor(category);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
