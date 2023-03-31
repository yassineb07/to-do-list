import { loadProject, renderProjects } from './dom';
import { toggleForm, clearProjectsForm } from './form';
import { addProject } from './project';

function init() {
  loadProject('inbox');
}
init();

// show project form
const projectFormBtn = document.getElementById('projectBtn');
projectFormBtn.addEventListener('click', () => {
  projectFormBtn.classList.add('hide');
  toggleForm('projectForm');
});

// hide project form
const cancelProjectBtn = document.getElementById('cancelProject');
cancelProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  projectFormBtn.classList.remove('hide');
  toggleForm('projectForm');
});

// Add project
const projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addProject();
  renderProjects();
  clearProjectsForm();
});

// show task form
const taskFormBtn = document.getElementById('formBtn');
taskFormBtn.addEventListener('click', () => {
  taskFormBtn.classList.add('hide');
  toggleForm('taskForm');
});

// hide task form
const cancelTaskBtn = document.getElementById('cancelTask');
cancelTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  taskFormBtn.classList.remove('hide');
  toggleForm('taskForm');
});
