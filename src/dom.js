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

function addTask(taskObj) {
  const tasksList = document.getElementById('tasksList');
  tasksList.appendChild(createTask(taskObj));
}
export { addProject, addTask };
