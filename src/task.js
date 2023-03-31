// create task object
function Task(title, disc) {
  const id = Date.now().toString();
  const complete = false;
  return { id, title, disc, complete };
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

export default addTask;
