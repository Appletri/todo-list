import _ from 'lodash';
import './style.css';
import {addNavFunc, createList, setupInput, updateContent} from './functions.js';
import {navArrMain,projectsTitle,projects} from './todo-data.js';

init();


function init(){
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
    createList(projectsTitle, document.querySelector('.Projects'));
    //navbar eventlistener
    addNavFunc();

    //main
    const main = document.createElement('div');
    main.className = 'main';
    document.body.appendChild(main);

    //input fields
    setupInput(main);
    const taskHeaders = document.createElement('div');
    const taskHeadArr = ['Name', 'Due Date', 'Time'];
    taskHeaders.className = 'taskHeaders';
    for (let i=0; i<taskHeadArr.length; i++){
        const para = document.createElement('p');
        para.textContent = taskHeadArr[i];
        taskHeaders.appendChild(para);
    }
    main.appendChild(taskHeaders);

    //changing content section
    const content = document.createElement('div');
    content.className = 'content';
    main.appendChild(content);
    updateContent(projects[0].tasks);
};