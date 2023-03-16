import { addProject, addTask } from './dom';

function toggleForm() {
  const form = document.getElementById('form');
  form.classList.toggle('show');
}

const project = document.getElementById('add-project');
project.addEventListener('click', addProject);

const task = document.getElementById('add-task');
task.addEventListener('click', () => {
  task.classList.add('hide');
  toggleForm();
});

const addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});
const cancelTaskBtn = document.getElementById('cancelTask');
cancelTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  task.classList.remove('hide');
  toggleForm();
});
