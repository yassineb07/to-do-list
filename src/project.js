// create project obj
function Project(name) {
  return { name };
}

// get user input
function getProjectInput() {
  const name = document.getElementById('name').value;
  return Project(name);
}

function clearProjectForm() {
  document.getElementById('name').value = '';
}

export { getProjectInput, clearProjectForm };
