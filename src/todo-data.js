import project from "./Classes/project.js";

const fns = require('date-fns');
let projects = JSON.parse(localStorage.getItem('projects')); 


if (JSON.parse(localStorage.getItem('projects')) == null || projects.length == 0 )  {
    projects = [
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
              "task": "Play Valorant Rank",
              "dueDate": `${fns.format(new Date(new Date().getTime() + (20 * 24 * 60 * 60 * 1000)), "yyyy-MM-dd")}`,
              "time": "21:00",
              "status": "incomplete",
              "id": 781
            },
            {
              "task": "Play TFT ",
              "dueDate": `${fns.format(new Date(new Date().getTime() + (12 * 24 * 60 * 60 * 1000)), "yyyy-MM-dd")}`,
              "time": "00:00",
              "status": "incomplete",
              "id": 586
            },
            {
              "task": "Play Street Fighter",
              "dueDate": `${fns.format(new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000)), "yyyy-MM-dd")}`,
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
              "task": "Watch Demon Slayer",
              "dueDate": `${fns.format(new Date(new Date().getTime() + (8 * 24 * 60 * 60 * 1000)), "yyyy-MM-dd")}`,
              "time": "18:00",
              "status": "incomplete",
              "id": 265
            }
          ],
          "id": 750
        }
      ];
    };

const navArrMain = ['Today','Week','All','Projects'];
const projectsTitle = projects.map(project => project.name);
const selectableNavArrMain = ['Today','Week','All'];
const selNavArrList = selectableNavArrMain.concat(projectsTitle);

console.log(projects);


export{navArrMain,projectsTitle,selectableNavArrMain,selNavArrList,projects};