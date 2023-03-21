import {
  renderProjectList,
  clearProjectList,
  clearProjectForm,
  addTask,
} from './dom';
import { getUserInput, clearFields } from './task';
import { addProject } from './project';

function toggleForm(id) {
  const form = document.getElementById(id);
  form.classList.toggle('show');
}

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
const addProjectBtn = document.getElementById('addProject');
addProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addProject();
  clearProjectList();
  renderProjectList();
  clearProjectForm();
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

// Add Task
const addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addTask(getUserInput());
  clearFields();
});
