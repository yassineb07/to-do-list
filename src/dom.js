// project
function createProject() {
  const project = document.createElement('li');
  const icon = document.createElement('img');
  const name = document.createElement('div');

  project.classList.add('project-item');

  icon.classList.add('project-icon');
  const path = '../dist/icons';
  icon.src = `${path}/project.svg`;

  name.classList.add('project');
  name.textContent = 'home';

  project.appendChild(icon);
  project.appendChild(name);

  return project;
}

function addProject() {
  const projectsList = document.getElementById('projectsList');
  projectsList.appendChild(createProject());
}

// task
function createTask() {
  const task = document.createElement('li');
  const icon = document.createElement('img');
  const name = document.createElement('div');

  task.classList.add('task-item');

  icon.classList.add('task-icon');
  const path = '../dist/icons';
  icon.src = `${path}/checkboxEmpty.svg`;

  name.classList.add('task');
  name.textContent = 'todo';

  task.appendChild(icon);
  task.appendChild(name);

  return task;
}

function addTask() {
  const tasksList = document.getElementById('tasksList');
  tasksList.appendChild(createTask());
}
export { addProject, addTask };
