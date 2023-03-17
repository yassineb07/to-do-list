import { addProject, addTask } from './dom';
import getUserInput from './task';

function toggleForm() {
  const form = document.getElementById('form');
  form.classList.toggle('show');
}

const project = document.getElementById('add-project');
project.addEventListener('click', addProject);

// show form
const formBtn = document.getElementById('formBtn');
formBtn.addEventListener('click', () => {
  formBtn.classList.add('hide');
  toggleForm();
});

// hide form
const cancelTaskBtn = document.getElementById('cancelTask');
cancelTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  formBtn.classList.remove('hide');
  toggleForm();
});

// Add Task
const addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addTask(getUserInput());
});
