import render from './dom';
import { getCurrentProjectId, getProjectList } from './storage';

window.addEventListener('load', () => {
  const list = getProjectList() || [{ id: 'inbox', name: 'Inbox', tasks: [] }];
  const id = getCurrentProjectId() || 'inbox';
  render(list, id);
});
