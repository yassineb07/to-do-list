(()=>{"use strict";function e(){document.getElementById("form").classList.toggle("show")}document.getElementById("add-project").addEventListener("click",(function(){document.getElementById("projectsList").appendChild(function(){const e=document.createElement("li"),t=document.createElement("img"),d=document.createElement("div");return e.classList.add("project-item"),t.classList.add("project-icon"),t.src="../dist/icons/project.svg",d.classList.add("project"),d.textContent="home",e.appendChild(t),e.appendChild(d),e}())}));const t=document.getElementById("formBtn");t.addEventListener("click",(()=>{t.classList.add("hide"),e()})),document.getElementById("cancelTask").addEventListener("click",(d=>{d.preventDefault(),t.classList.remove("hide"),e()})),document.getElementById("addTask").addEventListener("click",(e=>{var t,d,n;e.preventDefault(),d=document.getElementById("title").value,n=document.getElementById("disc").value,t={title:d,disc:n,getInfo:()=>{console.log(d),console.log(n)}},document.getElementById("tasksList").appendChild(function(e){const t=document.createElement("li"),d=document.createElement("img"),n=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div");return t.classList.add("task-item"),d.classList.add("task-icon"),d.src="../dist/icons/checkboxEmpty.svg",n.classList.add("task"),c.classList.add("task-title"),s.classList.add("task-disc"),c.textContent=e.title,s.textContent=e.disc,n.appendChild(c),n.appendChild(s),t.appendChild(d),t.appendChild(n),t}(t)),document.getElementById("title").value="",document.getElementById("disc").value=""}))})();