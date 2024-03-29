import { format, isValid } from 'date-fns';

// create task object
function Task(title, disc, date) {
  const id = Date.now().toString();
  let dueDate = new Date(date);
  if (isValid(dueDate)) {
    dueDate = format(dueDate, 'dd/MM/yy');
  } else {
    dueDate = null;
  }

  return { id, title, disc, dueDate, complete: false };
}

// get user input
function getUserInput() {
  const title = document.getElementById('title').value;
  const disc = document.getElementById('disc').value;
  const dueDate = document.getElementById('dueDate').value;
  return { title, disc, dueDate };
}

// add task
function addTask(projectObj) {
  const input = getUserInput();
  const task = Task(input.title, input.disc, input.dueDate);
  projectObj.tasks.push(task);
}

// delete task
function deleteTask(projectObj, id) {
  const taskIndex = projectObj.tasks.findIndex((taskEl) => taskEl.id === id);
  projectObj.tasks.splice(taskIndex, 1);
}

// complete task
function completeTask(taskObj) {
  if (taskObj.complete) {
    taskObj.complete = false;
  } else {
    taskObj.complete = true;
  }
}

// set due date
function setDueDate(taskObj, date) {
  taskObj.dueDate = format(new Date(date), 'dd/MM/yy');
}
export { addTask, deleteTask, completeTask, setDueDate };
