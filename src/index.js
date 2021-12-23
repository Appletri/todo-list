import _ from 'lodash';
import './style.css';
import {addNavFunc, createList, setupInput, updateContent, addProjectButton} from './functions.js';
import {navArrMain,projectsTitle,projects,selNavArrList} from './todo-data.js';

init();


function init(){
    //header
    const header = document.createElement('header');
    document.body.appendChild(header);
    const title = document.createElement('h1');
    title.textContent = 'To-Do List';
    header.appendChild(title);

    //navbar and main div
    const nbm = document.createElement('div');
    nbm.className = 'nbm';
    document.body.appendChild(nbm);

    //navbar
    const navbar = document.createElement('nav');
    nbm.appendChild(navbar);
    createList(navArrMain,navbar,'nav-list');
    createList(projectsTitle, document.querySelector('.Projects'), 'project-list');
    addProjectButton(document.querySelector('.Projects'));
    //navbar eventlistener
    addNavFunc(selNavArrList);

    //main
    const main = document.createElement('div');
    main.className = 'main';
    nbm.appendChild(main);

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