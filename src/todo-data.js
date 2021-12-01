import project from "./Classes/project.js";

//titles
const navArrMain = ['Today','Week','All','Projects'];
const projectsTitle = ['Dailes','Gym','Games','Movies']
const selectableNavArrMain = ['Today','Week','All'];
const selNavArrList = selectableNavArrMain.concat(projectsTitle);
const projects = [];

function addProjects(parent, arrList) {
    for (let i=0;i<arrList.length;i++){
        const p = new project(arrList[i], parent);
        p.assignId();

        parent.push(p);
    }
    
}

addProjects(projects, projectsTitle);
console.log(projects);


export{navArrMain,projectsTitle,selectableNavArrMain,selNavArrList,projects};