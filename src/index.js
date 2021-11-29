import _ from 'lodash';
import './style.css';

init();
function init(){
    //constructor
    const toDoItem = (task, dueDate) => {
        const getTask = () => task;
        const getDueDate = () => dueDate;

    };

    //Arrays and Objects
    const navArrMain = ['Today','Week','All','Projects'];
    const projects = ['Gym','Games','Movies']
    const selectableNavArrMain = ['Today','Week','All'];
    const selNavArrList = selectableNavArrMain.concat(projects);
    const Today = [{task : 'wash car', 
                    dueDate : '12/1/2021'},
                    
                    {task : 'eat', 
                    dueDate : '12/2/2021'}];

    const Week = [{task : 'something else', 
                    dueDate : '12/1/2021'},
                    
                    {task : 'another thing', 
                    dueDate : '12/2/2021'}];
    const All = Today.concat(Week);
    

    //header
    const header = document.createElement('header');
    document.body.appendChild(header);
    const title = document.createElement('h1');
    title.textContent = 'To-Do List';
    header.appendChild(title);

    //navbar
    const navbar = document.createElement('nav');
    document.body.appendChild(navbar);
    createList(navArrMain,navbar);
    createList(projects, document.querySelector('.Projects'));
    //navbar eventlistener
    addNavFunc();

    //main content
    const main = document.createElement('div');
    main.className = 'content';
    document.body.appendChild(main);


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
    }

    function addNavFunc(){
        selNavArrList.forEach(element => {
            const el = document.querySelector(`.${element}`);
            el.addEventListener('click', goTo);
            el.classList.add('selectable');
        });
    }

    function goTo(e){
        
        console.table(eval(e.target.textContent));
    }

}