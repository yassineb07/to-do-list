const PROJ_LIST_KEY = 'project.list';
const CRNT_PROJ_KEY = 'currentProject';

function saveProjectsList(list) {
  localStorage.setItem(PROJ_LIST_KEY, JSON.stringify(list));
}

function getProjectList() {
  const list = localStorage.getItem(PROJ_LIST_KEY);
  return JSON.parse(list);
}

function saveCurrentProjectId(id) {
  localStorage.setItem(CRNT_PROJ_KEY, id);
}

function getCurrentProjectId() {
  return localStorage.getItem(CRNT_PROJ_KEY);
}

export {
  saveProjectsList,
  getProjectList,
  saveCurrentProjectId,
  getCurrentProjectId,
};
