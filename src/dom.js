import { format, isValid } from 'date-fns';
import { projList, addProject, deleteProject } from './project';
import { addTask, deleteTask, completeTask, setDueDate } from './task';
import { clearProjectsForm, clearTaskForm } from './form';

let currentProjectId = 'inbox';

// Project

// create project item
function createProjectItem(projectObj) {
  const project = document.createElement('li');
  const icon = document.createElement('img');
  const name = document.createElement('div');
  const deleteIcon = document.createElement('img');

  project.id = 'projectItem';
  project.classList.add('project-item');
  project.dataset.projectId = projectObj.id;

  icon.classList.add('project-icon');
  const path = '../dist/icons';
  icon.src = `${path}/project.svg`;

  name.classList.add('project');
  name.textContent = projectObj.name;

  deleteIcon.id = 'deleteProject';
  deleteIcon.classList.add('project-icon');
  deleteIcon.src = `${path}/delete.svg`;

  name.appendChild(deleteIcon);
  project.appendChild(icon);
  project.appendChild(name);

  return project;
}

// render list of projects

function renderProjectsList() {
  const projectsList = document.getElementById('projectsList');
  projList.forEach((project) => {
    if (project.id === 'inbox') return;
    const item = createProjectItem(project);
    projectsList.appendChild(item);
  });
}

function clearProjectsList() {
  const projectsList = document.getElementById('projectsList');
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
  task.dataset.taskId = taskObj.id;

  const checkIcon = document.createElement('img');
  checkIcon.classList.add('task-icon');
  checkIcon.id = 'checkbox';
  const path = '../dist/icons';
  if (taskObj.complete) {
    checkIcon.src = `${path}/checkbox.svg`;
    task.classList.add('check');
  } else {
    checkIcon.src = `${path}/checkboxEmpty.svg`;
    task.classList.remove('check');
  }

  const todo = document.createElement('div');
  todo.classList.add('task-content');

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.textContent = taskObj.title;

  const disc = document.createElement('div');
  disc.classList.add('task-disc');
  disc.textContent = taskObj.disc;

  const deleteIcon = document.createElement('img');
  deleteIcon.id = 'deleteTask';
  deleteIcon.classList.add('task-icon');
  deleteIcon.src = `${path}/delete.svg`;

  const dueDateIcon = document.createElement('img');
  dueDateIcon.id = 'dueDateIcon';
  dueDateIcon.classList.add('task-icon');
  dueDateIcon.src = `${path}/calendar.svg`;

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.id = 'dueDateInput';
  dueDateInput.classList.add('task-input');
  dueDateInput.style.display = 'none';

  const dueDateEl = document.createElement('p');
  dueDateEl.id = 'dueDateEl';
  if (isValid(taskObj.dueDate)) {
    dueDateEl.textContent = format(taskObj.dueDate, 'MM/dd/yy');
    dueDateIcon.style.display = 'none';
  }

  title.appendChild(dueDateEl);
  title.appendChild(dueDateInput);
  title.appendChild(dueDateIcon);
  title.appendChild(deleteIcon);

  todo.appendChild(title);
  todo.appendChild(disc);

  task.appendChild(checkIcon);
  task.appendChild(todo);

  return task;
}

// render list of tasks

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
  if (typeof projectObj !== 'object') return;
  const title = document.getElementById('mainTitle');
  title.textContent = projectObj.name;
  renderTasks(projectObj.tasks);
}

// add event listeners

// inbox
const inbox = document.getElementById('inbox');
inbox.addEventListener('click', (e) => {
  currentProjectId = e.currentTarget.id;
  loadProject(currentProjectId);
});

// project items
const projectListEl = document.getElementById('projectsList');

projectListEl.addEventListener('click', (e) => {
  if (e.target.id !== 'projectsList' && e.target.id !== 'deleteProject') {
    currentProjectId = e.target.parentElement.dataset.projectId;
    loadProject(currentProjectId);
  }
});

// add project
const projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (document.getElementById('name').value === '') return;
  addProject();
  renderProjects();
  clearProjectsForm();
});

// delete project
projectListEl.addEventListener('click', (e) => {
  if (e.target.id === 'deleteProject') {
    const selectedProj = e.target.parentElement.parentElement;
    deleteProject(selectedProj.dataset.projectId);
    renderProjects();
    currentProjectId = projList[0].id;
    loadProject(currentProjectId);
  }
});

// add task
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

// delete task
const tasksListEl = document.getElementById('tasksList');
tasksListEl.addEventListener('click', (e) => {
  if (e.target.id === 'deleteTask') {
    const proj = projList.find((project) => project.id === currentProjectId);
    deleteTask(
      proj,
      e.target.parentElement.parentElement.parentElement.dataset.taskId
    );
    loadProject(currentProjectId);
  }
});

// complete task
tasksListEl.addEventListener('click', (e) => {
  if (e.target.id === 'checkbox') {
    const proj = projList.find((project) => project.id === currentProjectId);
    const task = proj.tasks.find(
      (taskEl) => taskEl.id === e.target.parentElement.dataset.taskId
    );
    completeTask(task);
    loadProject(currentProjectId);
  }
});

// show due date input
tasksListEl.addEventListener('click', (e) => {
  if (e.target.id === 'dueDateIcon' || e.target.id === 'dueDateEl') {
    const dateEl = e.target.parentElement.children[0];
    const dateInput = e.target.parentElement.children[1];
    const dateIcon = e.target.parentElement.children[2];
    dateInput.style.display = '';
    dateEl.textContent = '';
    dateIcon.style.display = 'none';
  }
});

// set due date
tasksListEl.addEventListener('input', (e) => {
  if (e.target.id === 'dueDateInput') {
    const proj = projList.find((project) => project.id === currentProjectId);
    const task = proj.tasks.find(
      (taskEl) =>
        taskEl.id ===
        e.target.parentElement.parentElement.parentElement.dataset.taskId
    );
    setDueDate(task, e.target.value);
    loadProject(currentProjectId);
  }
});

export default loadProject;
