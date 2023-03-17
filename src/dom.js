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
function createTask(taskObj) {
  const task = document.createElement('li');
  const icon = document.createElement('img');
  const todo = document.createElement('div');
  const title = document.createElement('div');
  const disc = document.createElement('div');

  task.classList.add('task-item');

  icon.classList.add('task-icon');
  const path = '../dist/icons';
  icon.src = `${path}/checkboxEmpty.svg`;

  todo.classList.add('task');
  title.classList.add('task-title');
  disc.classList.add('task-disc');
  title.textContent = taskObj.title;
  disc.textContent = taskObj.disc;

  todo.appendChild(title);
  todo.appendChild(disc);

  task.appendChild(icon);
  task.appendChild(todo);

  return task;
}

function addTask(taskObj) {
  const tasksList = document.getElementById('tasksList');
  tasksList.appendChild(createTask(taskObj));
}
export { addProject, addTask };
