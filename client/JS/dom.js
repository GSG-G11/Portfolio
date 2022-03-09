/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const cards = document.querySelector('.cards');
const categoryList = document.querySelector('#category');

const handleProjects = (data) => {
  cards.textContent = '';
  data.forEach((projectObj) => {
    const project = document.createElement('li');
    project.className = 'card';

    const name = document.createElement('h4');
    name.className = 'name-card';
    name.textContent = projectObj.name;

    const description = document.createElement('p');
    description.className = 'desc-card';
    description.textContent = projectObj.description;

    const categoryName = document.createElement('p');
    categoryName.className = 'category-card';
    categoryName.textContent = projectObj.categoryname;

    const linksIcon = document.createElement('div');
    linksIcon.className = 'icons-card';

    const linkGithub = document.createElement('a');
    linkGithub.classList.add('user-name');
    linkGithub.setAttribute('href', projectObj.link);

    const linkIcon = document.createElement('i');
    linkIcon.classList.add('fa-solid', 'fa-link', 'link-icon');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-regular', 'fa-pen-to-square', 'edit-icon');
    editIcon.addEventListener('click', () => editProject(projectObj.id));

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-regular', 'fa-trash-can', 'delete-icon');
    deleteIcon.addEventListener('click', () => deleteProject(projectObj.id));

    linkGithub.appendChild(linkIcon);
    linksIcon.appendChild(linkGithub);
    linksIcon.appendChild(editIcon);
    linksIcon.appendChild(deleteIcon);

    project.appendChild(name);
    project.appendChild(description);
    project.appendChild(categoryName);
    project.appendChild(linksIcon);
    cards.insertBefore(project, cards.children[0]);
  });
};

const handleCategories = (data) => {
  categoryList.textContent = '';
  data.forEach((category) => {
    const option = document.createElement('option');
    option.textContent = category.name;
    option.value = category.categoryid;
    categoryList.appendChild(option);
  });
};

const handleDelete = (data) => {
  window.location = '/project/getHomeProjects';
};
