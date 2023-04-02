import { projList, addProject } from './project';
import { addTask, completeTask } from './task';
import { clearProjectsForm, clearTaskForm } from './form';

let currentProjectId = 'inbox';

// Project

// create project item
function createProjectItem(projectObj) {
  const project = document.createElement('li');
  const icon = document.createElement('img');
  const name = document.createElement('div');

  project.classList.add('project-item');
  project.dataset.projectId = projectObj.id;
  project.addEventListener('click', (e) => {
    console.log(e.currentTarget.dataset.projectId);
    currentProjectId = e.currentTarget.dataset.projectId;
    loadProject(currentProjectId);
  });

  icon.classList.add('project-icon');
  const path = '../dist/icons';
  icon.src = `${path}/project.svg`;

  name.classList.add('project');
  name.textContent = projectObj.name;

  project.appendChild(icon);
  project.appendChild(name);

  return project;
}

const projectsList = document.getElementById('projectsList');

// render list of projects

function renderProjectsList() {
  projList.forEach((project) => {
    if (project.id === 'inbox') return;
    const item = createProjectItem(project);
    projectsList.appendChild(item);
  });
}

function clearProjectsList() {
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.firstChild);
  }
}

function renderProjects() {
  clearProjectsList();
  renderProjectsList();
}

// Task

//  create task item
function createTaskItem(taskObj) {
  const task = document.createElement('li');
  task.classList.add('task-item');

  const icon = document.createElement('img');
  icon.classList.add('task-icon');
  icon.id = taskObj.id;
  const path = '../dist/icons';
  if (taskObj.complete) {
    icon.src = `${path}/checkbox.svg`;
    task.classList.add('check');
  } else {
    icon.src = `${path}/checkboxEmpty.svg`;
    task.classList.remove('check');
  }
  /*   icon.addEventListener('click', (e) => {
    console.log(e.target);

      if (icon.src.endsWith('/checkboxEmpty.svg')) {
      icon.src = `${path}/checkbox.svg`;
    } else {
      icon.src = `${path}/checkboxEmpty.svg`;
    } 

     task.classList.toggle('check');
  }); */

  const todo = document.createElement('div');
  todo.classList.add('task-content');

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.textContent = taskObj.title;

  const disc = document.createElement('div');
  disc.classList.add('task-disc');
  disc.textContent = taskObj.disc;

  todo.appendChild(title);
  todo.appendChild(disc);

  task.appendChild(icon);
  task.appendChild(todo);

  return task;
}

// renders list of tasks

function renderTasksList(list) {
  const tasksList = document.getElementById('tasksList');
  list.forEach((task) => {
    tasksList.appendChild(createTaskItem(task));
  });
}

function clearTasksList() {
  const tasksList = document.getElementById('tasksList');
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
  }
}

function renderTasks(list) {
  clearTasksList();
  renderTasksList(list);
}

// load project
function loadProject(id) {
  const projectObj = projList.find((project) => project.id === id);
  const title = document.getElementById('mainTitle');
  title.textContent = projectObj.name;
  renderTasks(projectObj.tasks);
}

// add event listeners

// inbox
const inbox = document.getElementById('inbox');
inbox.addEventListener('click', (e) => {
  console.log(e.currentTarget.id);
  currentProjectId = e.currentTarget.id;
  loadProject(currentProjectId);
});

// Add project
const projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (document.getElementById('name').value === '') return;
  addProject();
  renderProjects();
  clearProjectsForm();
});

// Add Task
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (document.getElementById('title').value === '') return;
  const projectObj = projList.find(
    (project) => project.id === currentProjectId
  );
  addTask(projectObj);
  renderTasks(projectObj.tasks);
  clearTaskForm();
});

// Task complete
const tasksListEl = document.getElementById('tasksList');
tasksListEl.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'img') {
    const proj = projList.find((project) => project.id === currentProjectId);
    const task = proj.tasks.find((taskEl) => taskEl.id === e.target.id);
    completeTask(task);
    loadProject(currentProjectId);
  }
});

export { renderProjects, loadProject };
