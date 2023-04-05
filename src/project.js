// projects list
const projList = [
  {
    id: 'inbox',
    name: 'Inbox',
    tasks: [],
  },
];

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

// add project
function addProject() {
  const project = Project(getProjectInput());
  projList.push(project);
}

// delete project
function deleteProject(id) {
  const projectIndex = projList.findIndex((projectEl) => projectEl.id === id);
  projList.splice(projectIndex, 1);
}

export { projList, addProject, deleteProject };
