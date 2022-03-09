/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
window.addEventListener('load', () => getDataApi('/project/getProjects', 'GET', handleProjects));
const form = document.getElementById('form');
const formContainer = document.getElementsByClassName('wrap-form-container')[0];

const username = document.getElementById('username');
const link = document.getElementById('link');
const description = document.getElementById('description');
const category = document.getElementById('category');
const cancel = document.getElementById('cancel-icon');

cancel.addEventListener('click', () => {
	formContainer.style.display = 'none';
});

const setErrorFor = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
  small.innerText = message;
  return false;
};

const setSuccessFor = (input) => {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
  return true;
};

const checkInputs = () => {
  let stauts = false;
	const usernameValue = username.value.trim();
	const linkValue = link.value.trim();
	const descriptionValue = description.value.trim();
	const categoryValue = category.value.trim();
	if (usernameValue === '') stauts = setErrorFor(username, 'Username cannot be blank');
  else stauts = setSuccessFor(username);

  if (linkValue === '') stauts = setErrorFor(link, 'link cannot be blank');
  else stauts = setSuccessFor(link);

	if (descriptionValue === '') stauts = setErrorFor(description, 'description cannot be blank');
	else stauts = setSuccessFor(description);

	if (categoryValue === '') stauts = setErrorFor(category, 'category cannot be blank');
	else stauts = setSuccessFor(category);
  return stauts;
};

form.addEventListener('submit', (e) => {
  if (checkInputs()) formContainer.style.display = 'none';
});

const loading = document.querySelector('.loading');
const showProject = document.querySelectorAll('.show-project');
const content = document.querySelector('.content');
const wrapProjectList = document.querySelector('.wrap-project-list');
const btnAddProject = document.querySelector('.btn-add-project');

const showLoading = () => { loading.style.display = 'block'; };
const hideLoading = () => { loading.style.display = 'none'; };

const getProject = () => {
  getDataApi('/project/getProjects', 'GET', handleProjects);
};
showProject.forEach((item) => {
  item.addEventListener('click', getProject);
});

const showAddProject = () => {
  formContainer.style.display = 'flex';
  getDataApi('/getCategories', 'GET', handleCategories);
};
btnAddProject.addEventListener('click', showAddProject);
