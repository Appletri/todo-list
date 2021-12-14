export {createList, addNavFunc, setupInput, updateContent, addProjectButton};
import {projects, selectableNavArrMain} from "./todo-data";
import task from "./Classes/task";
import project from "./Classes/project.js";


function createList(arrList,parent,ulName){
    const newList = document.createElement('ul');
    newList.className = ulName;
    for (let i=0;i<arrList.length;i++){
        const listItem = document.createElement('li');
        listItem.className = `${arrList[i]}`;
        listItem.textContent = `${arrList[i]}`;
        newList.appendChild(listItem);
    }    
    parent.appendChild(newList);
};

function addNavFunc(arr){
    arr.forEach(element => {
        const el = document.querySelector(`.${element}`);
        el.addEventListener('click', goTo);
        el.classList.add('selectable');
    });
};

function goTo(e){
    const projectsTitle = projects.map(project => project.name);
    const selNavArrList = selectableNavArrMain.concat(projectsTitle);
    for (let y=0; y<selNavArrList.length;y++){
        let nav = document.querySelector(`.${selNavArrList[y]}`)
        nav.classList.remove('selected');
    }
    e.target.classList.add('selected');

    const fns = require('date-fns');
    const allTasks = getAll(); 
    const todayTasks = allTasks.filter(task => task.dueDate == fns.format(new Date(), "yyyy-MM-dd"));
    const weekTasks = allTasks.filter(task => task.dueDate <= fns.format(new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)), "yyyy-MM-dd"));
    
    for (let i=0; i<projects.length; i++){

        if (e.target.textContent === projects[i].name){
            return updateContent(projects[i].tasks, true);
        }
        else if (e.target.textContent === 'Today'){
            sortByTime(todayTasks);
            return updateContent(todayTasks, false);
        }
        else if (e.target.textContent === 'Week'){
            sortByTime(weekTasks);  
            return updateContent(weekTasks, false);
        }
        else if (e.target.textContent === 'All'){
            sortByTime(allTasks);  
            return updateContent(allTasks, false);
            
        }
    }
};

function setupInput(parent){
    const inputArrLabel = ['Task: ','Due Date: ', 'Time: '];
    const inputArrData = ['task', 'dueDate', 'time'];
    const inputArrType = ['type', 'date', 'time'];

    const mainInput = document.createElement('div');
    // const inputTitle = document.createElement('h2');
    const taskForm = document.createElement('form');
    const button = document.createElement('button');

    mainInput.className = 'task-input';
    button.type = 'submit';
    button.textContent = 'Add';
    button.addEventListener('click', addTask);
    
    // inputTitle.textContent = 'Task Input'

    parent.appendChild(mainInput);
    // mainInput.appendChild(inputTitle);
    mainInput.appendChild(taskForm);

    for (let i=0;i<inputArrLabel.length;i++){
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        div.className = `${inputArrData[i]}Input`;
        label.textContent = `${inputArrLabel[i]}`;
        // label.for = `${inputArrData[i]}`;
        input.type = `${inputArrType[i]}`;
        input.className = `${inputArrData[i]}`;
        div.appendChild(label);
        div.appendChild(input);
        taskForm.appendChild(div);
    }

    mainInput.appendChild(button);
};

function addTask(e){
    const taskIn = document.querySelector('.task');
    const ddIn = document.querySelector('.dueDate');
    const time = document.querySelector('.time');
    let selProject = document.querySelector('.selected').textContent;

    if (taskIn.value === '' || ddIn.value === '' || selProject === null || selProject ==='Today' || selProject ==='Week' || selProject ==='All'){
        return;
    }
    else {
        for(let i = 0; i<projects.length;i++){
            if (projects[i].name === selProject){
                let newTask = new task(taskIn.value, ddIn.value, time.value, projects[i].tasks);
                newTask.assignId();
                projects[i].tasks.push(newTask);
                console.table (projects[i].tasks); 
                updateContent(projects[i].tasks, true);
            }
        }
    }
};

function updateContent(arr, filterTrue){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    for (let i = 0; i < arr.length; i++){
        let div = document.createElement('div');
        let targetId = arr[i].id;
        div.className = "taskItem";
        div.innerHTML = `<div class='priority' id='${arr[i].id}'></div> <p>${arr[i].task} <p>${arr[i].dueDate} <p>${timeConversion(arr[i].time)}`;
        if (filterTrue === true){
            addDelete(div, targetId, arr);
        }

        if (i == 0 || i % 2 == 0) {
            div.classList.add("other-line");
        }
        updatePriority(arr[i].id, arr[i].time, arr[i].dueDate);
        content.appendChild(div);
    }
    sortByTime(arr);
    
    console.table(projects);
    localStorage.setItem('projects', JSON.stringify(projects));
}

function timeConversion(time){
    const hours =  time.split(':')[0];
    const mins =  time.split(':')[1];
    if(hours == '00' ){
        return `12:${mins} AM`;
    }
    else if(hours >= '01' && hours <= '11'){
        return `${hours-0}:${mins} AM`;
    }
    else if(hours == '12'){
        return `12:${mins} PM`;
    }
    else if(hours >= '13' && hours <= '23'){
        return `${hours-12}:${mins} PM`;
    }
}

function addDelete(parent, targetId, arr) {
    let deleteButton = document.createElement('div');
    deleteButton.className = "delete";
    deleteButton.textContent = 'X';
    deleteButton.onclick = function () {
        let indexId = arr.findIndex (o => o.id === targetId);
        arr.splice( indexId, 1 );
        updateContent(arr, true);
        console.table (arr);
    };
    parent.appendChild(deleteButton);
}

function getAll() {
    const taskArray = [];
    for (let i=0; i<projects.length; i++){
        for (let y=0; y<projects[i].tasks.length; y++){
            taskArray.push(projects[i].tasks[y]);
        } 
    }
    return taskArray;
}





function addProjectButton(parent) {
    const div = document.createElement('div');
    div.textContent = '+ Project';
    div.className = 'add-project';
    div.addEventListener('click', toggleEditProjects);
    parent.appendChild(div);
}

function toggleEditProjects(e){
    if (e.target.textContent === '+ Project'){
        addNewProj();
    }
    else{
        submitProjChanges(projects);
    }
}

function addNewProj() {
    const navProj = document.querySelector('.project-list');
    const addProj = document.querySelector('.add-project');
    navProj.innerHTML = '';
    const p = new project('NewProject', projects);
    p.assignId();
    projects.push(p);

    updateNav();

    function updateNav(){
        const projectsTitle = projects.map(project => project.name);
        navProj.innerHTML = '';
        for(let i=0; i<projectsTitle.length; i++){
            const div = document.createElement('div');
            const input = document.createElement('input');
            const targetId = projects[i].id;
            div.className = 'edit-projects-div'
            input.type = 'type';
            input.className = 'edit-projects'
            input.value = `${projectsTitle[i]}`;
            addDelete(div, targetId, projects);
            div.appendChild(input);
            navProj.appendChild(div);
        }
    }


    function addDelete(parent, targetId, arr) {
        let deleteButton = document.createElement('div');
        deleteButton.className = "delete";
        deleteButton.textContent = 'X';
        deleteButton.onclick = function () {
            let indexId = arr.findIndex (o => o.id === targetId);
            arr.splice( indexId, 1 );
            updateNav();
            console.table (arr);
        };
        parent.appendChild(deleteButton);
    }


    addProj.textContent = 'Submit';
}

function submitProjChanges(arrChanged){
    const navProj = document.querySelector('.project-list');
    const addProj = document.querySelector('.add-project');

    const newTitleArr = [];
    const navTitles = document.querySelectorAll('.edit-projects');
    for (let y=0;y<navTitles.length; y++){
        newTitleArr.push(navTitles[y].value);
        arrChanged[y].name = navTitles[y].value;
    };

    localStorage.setItem('projects', JSON.stringify(projects));

    navProj.innerHTML = '';
    addProj.textContent = '+ Project';

    for (let i=0;i<newTitleArr.length;i++){
        const listItem = document.createElement('li');
        listItem.className = `${newTitleArr[i]}`;
        listItem.textContent = `${newTitleArr[i]}`;
        navProj.appendChild(listItem);
    }
    addNavFunc(newTitleArr);
}


function sortByTime(arr) {

    arr.sort(function(a,b) {
        let textA = a.time;
        let textB = b.time;
        return (textA > textB) ? 1 : (textA < textB) ? -1: 0;
    }); 

    arr.sort(function(a,b) {
        let textA = a.dueDate;
        let textB = b.dueDate;
        return (textA > textB) ? 1 : (textA < textB) ? -1: 0;
    }); 
}

function updatePriority(id, time, date){
    const dateY = date.split('-')[0];
    const dateM = date.split('-')[1];
    const dateD = date.split('-')[1];
    const taskH = time.split(':')[0];
    const taskM = time.split(':')[1];
    const fns = require('date-fns');
    const currentTime = fns.format(new Date().getTime(),'yyyy, M, d, H, mm');
    console.log(currentTime);
    const result = fns.differenceInHours(
        (parseFloat(currentTime)),
        (dateY, dateM, dateD, taskH, taskM)    
    );
    console.log (result);

    // document.getElementById(id).style.filter = `greyscale(${weight}%)`;

}