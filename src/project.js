const projList = [];

// create project obj
function Project(name) {
  const tasks = [];
  const id = Date.now().toString();
  return { id, name, tasks };
}

// get user input
function getProjectInput() {
  return document.getElementById('name').value;
}

function addProject() {
  const project = Project(getProjectInput());
  projList.push(project);
}

export { projList, addProject };
