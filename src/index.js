import { addProject, addTask } from './dom';

const project = document.getElementById('add-project');
project.addEventListener('click', addProject);

const task = document.getElementById('add-task');
task.addEventListener('click', addTask);
