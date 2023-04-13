// toggle form
function toggleForm(id) {
  const form = document.getElementById(id);
  form.classList.toggle('show');
}

// clear project form
function clearProjectsForm() {
  document.getElementById('name').value = '';
}

// clear task form
function clearTaskForm() {
  document.getElementById('title').value = '';
  document.getElementById('disc').value = '';
  document.getElementById('dueDate').value = '';
}

// show project form
const projectFormBtn = document.getElementById('projectBtn');
projectFormBtn.addEventListener('click', () => {
  projectFormBtn.classList.add('hide');
  toggleForm('projectForm');
});

// hide project form
const cancelProjectBtn = document.getElementById('cancelProject');
cancelProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  projectFormBtn.classList.remove('hide');
  toggleForm('projectForm');
});

// show task form
const taskFormBtn = document.getElementById('formBtn');
taskFormBtn.addEventListener('click', () => {
  taskFormBtn.classList.add('hide');
  toggleForm('taskForm');
});

// hide task form
const cancelTaskBtn = document.getElementById('cancelTask');
cancelTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  taskFormBtn.classList.remove('hide');
  toggleForm('taskForm');
});

export { clearProjectsForm, clearTaskForm };
