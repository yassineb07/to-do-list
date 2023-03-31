const projList = [
  {
    id: 'inbox',
    name: 'Inbox',
    tasks: [
      { title: 'task1', disc: 'something' },
      { title: 'task2' },
      { title: 'task3' },
    ],
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

export { projList, addProject };
