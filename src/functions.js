export {createList, addNavFunc, setupInput, updateContent};
import { selNavArrList, projects, allTasks, todayTasks, weekTasks} from "./todo-data";
import task from "./Classes/task";

//functions
function createList(arrList,parent){
    const newList = document.createElement('ul');
    for (let i=0;i<arrList.length;i++){
        const listItem = document.createElement('li');
        listItem.className = `${arrList[i]}`;
        listItem.textContent = `${arrList[i]}`;
        newList.appendChild(listItem);
    }    
    parent.appendChild(newList);
};

function addNavFunc(){
    selNavArrList.forEach(element => {
        const el = document.querySelector(`.${element}`);
        el.addEventListener('click', goTo);
        el.classList.add('selectable');
    });
};

function goTo(e){
    for (let y=0; y<selNavArrList.length;y++){
        let nav = document.querySelector(`.${selNavArrList[y]}`)
        nav.classList.remove('selected');
    }
    e.target.classList.add('selected');

    for (let i=0; i<projects.length; i++){

        if (e.target.textContent === projects[i].name){
            return updateContent(projects[i].tasks);
        }
        else if (e.target.textContent === 'Today'){
            console.log(todayTasks);
            return updateContent(todayTasks);
        }
        else if (e.target.textContent === 'Week'){
            console.log(weekTasks);
            return updateContent(weekTasks);
        }
        else if (e.target.textContent === 'All'){    
            console.table (allTasks);
            return updateContent(allTasks);
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
                updateContent(projects[i].tasks);
            }
        }
    }
};

function updateContent(arr){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    for (let i = 0; i < arr.length; i++){
        let div = document.createElement('div');
        let targetId = arr[i].id;
        div.className = "taskItem";
        div.innerHTML = `<p>${arr[i].task} <p>${arr[i].dueDate} <p>${arr[i].time}`;
        addDelete(div, targetId, arr);

        if (i == 0 || i % 2 == 0) {
            div.classList.add("other-line");
        }
        content.appendChild(div);
    }

    
}

function addDelete(parent, targetId, arr) {
    let deleteButton = document.createElement('div');
    deleteButton.className = "delete";
    deleteButton.textContent = 'X';
    deleteButton.onclick = function () {
        let indexId = arr.findIndex (o => o.id === targetId);
        arr.splice( indexId, 1 );
        updateContent(arr);
        console.table (arr);
    };
    parent.appendChild(deleteButton);
}

