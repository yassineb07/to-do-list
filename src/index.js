import render from './dom';
import { getProjectList } from './storage';

window.addEventListener('load', () => {
  const list = getProjectList();
  render(list);
});
