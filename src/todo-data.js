import project from "./Classes/project.js";

const fns = require('date-fns');

const projects = [
    {
      "name": "Gym",
      "tasks": [
        {
          "task": "Lift Weights",
          "dueDate": `${fns.format(new Date(), "yyyy-MM-dd")}`,
          "time": "17:00",
          "status": "incomplete",
          "id": 723
        },
        {
          "task": "Swimming",
          "dueDate": `${fns.format(new Date(), "yyyy-MM-dd")}`,
          "time": "16:00",
          "status": "incomplete",
          "id": 45
        },
        {
            "task": "Volleyball",
            "dueDate": "2021-12-07",
            "time": "13:00",
            "status": "incomplete",
            "id": 782
        }
      ],
      "id": 329
    },
    {
      "name": "Games",
      "tasks": [
        {
          "task": "Valorant Rank",
          "dueDate": "2021-12-07",
          "time": "21:00",
          "status": "incomplete",
          "id": 781
        },
        {
          "task": "TFT ",
          "dueDate": "2021-12-08",
          "time": "00:00",
          "status": "incomplete",
          "id": 586
        },
        {
          "task": "Street Fighter",
          "dueDate": "2021-12-08",
          "time": "18:00",
          "status": "incomplete",
          "id": 469
        }
      ],
      "id": 195
    },
    {
      "name": "Movies",
      "tasks": [
        {
          "task": "Demon Slayer",
          "dueDate": "2021-12-15",
          "time": "18:00",
          "status": "incomplete",
          "id": 265
        }
      ],
      "id": 750
    }
  ];


const navArrMain = ['Today','Week','All','Projects'];
const projectsTitle = projects.map(project => project.name);
const selectableNavArrMain = ['Today','Week','All'];
const selNavArrList = selectableNavArrMain.concat(projectsTitle);

const allTasks = [];
function getAll() {
    for (let i=0; i<projects.length; i++){
        for (let y=0; y<projects[i].tasks.length; y++){
            allTasks.push(projects[i].tasks[y]);
        } 
    }

}
getAll(); 

const todayTasks = allTasks.filter(task => task.dueDate == fns.format(new Date(), "yyyy-MM-dd"));
const weekTasks = allTasks.filter(task => task.dueDate <= fns.format(new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)), "yyyy-MM-dd"));
// function addProjects(parent, arrList) {
//     for (let i=0;i<arrList.length;i++){
//         const p = new project(arrList[i], parent);
//         p.assignId();

//         parent.push(p);
//     }
    
// }

// addProjects(projects, projectsTitle);
console.log(projects);


export{navArrMain,projectsTitle,selectableNavArrMain,selNavArrList,projects,allTasks,todayTasks,weekTasks};