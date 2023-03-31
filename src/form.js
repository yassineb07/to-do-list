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
}

export { toggleForm, clearProjectsForm, clearTaskForm };
