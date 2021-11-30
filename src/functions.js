export {createList, addNavFunc, setupInput};
import { selNavArrList, All, Today} from "./todo-data";
import { todoItem, project} from "./classes";

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
    
    console.table(eval(e.target.textContent));
};

function setupInput(parent){
    const inputArrLabel = ['Task: ','Due Date: ', 'Time: '];
    const inputArrData = ['task', 'dueDate', 'time'];
    const inputArrType = ['type', 'date', 'time'];

    const mainInput = document.createElement('div');
    const inputTitle = document.createElement('h2');
    const taskForm = document.createElement('form');
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Add';
    button.addEventListener('click', addTask);
    
    inputTitle.textContent = 'Task Input'

    parent.appendChild(mainInput);
    mainInput.appendChild(inputTitle);
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

function addTask(){
    const taskIn = document.querySelector('.task');
    const ddIn = document.querySelector('.dueDate');
    const time = document.querySelector('.time');
    if (taskIn.value === '' || ddIn.value === ''){
        return;
    }
    else {
        let newTask = new todoItem(taskIn.value, ddIn.value, time.value, All);
        newTask.assignId();
        All.push(newTask);
        console.table (All); 
    }
};
