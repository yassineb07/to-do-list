// create task object
function Task(title, disc) {
  const id = Date.now().toString();
  return { id, title, disc, complete: false };
}

// get user input
function getUserInput() {
  const title = document.getElementById('title').value;
  const disc = document.getElementById('disc').value;
  return { title, disc };
}

// add task
function addTask(projectObj) {
  const input = getUserInput();
  const task = Task(input.title, input.disc);
  projectObj.tasks.push(task);
}

function completeTask(taskObj) {
  if (taskObj.complete) {
    taskObj.complete = false;
  } else {
    taskObj.complete = true;
  }
}

export { addTask, completeTask };
