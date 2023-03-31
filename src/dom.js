import { projList } from './project';
import addTask from './task';
import { clearTaskForm } from './form';

let currentProjectId;

const inbox = document.getElementById('inbox');
inbox.addEventListener('click', (e) => {
  loadProject('inbox');
});
// create project item
function createProjectItem(projectObj) {
  const project = document.createElement('li');
  const icon = document.createElement('img');
  const name = document.createElement('div');

  project.classList.add('project-item');
  project.dataset.projectId = projectObj.id;
  project.addEventListener('click', (e) => {
    console.log(e.currentTarget);
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

//  create task item
function createTaskItem(taskObj) {
  const task = document.createElement('li');
  task.classList.add('task-item');

  const icon = document.createElement('img');
  icon.classList.add('task-icon');
  const path = '../dist/icons';
  icon.src = `${path}/checkboxEmpty.svg`;
  icon.addEventListener('click', () => {
    if (icon.src.endsWith('/checkboxEmpty.svg')) {
      icon.src = `${path}/checkbox.svg`;
    } else {
      icon.src = `${path}/checkboxEmpty.svg`;
    }
    task.classList.toggle('check');
  });

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

// Add Task
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectObj = projList.find(
    (project) => project.id === currentProjectId
  );
  addTask(projectObj);
  renderTasks(projectObj.tasks);
  clearTaskForm();
});

export { renderProjects, loadProject };
