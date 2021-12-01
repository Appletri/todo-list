import _ from 'lodash';
import './style.css';
import {addNavFunc, createList, setupInput} from './functions.js';
import {navArrMain,projectsTitle} from './todo-data.js';

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

    //changing content section
    const content = document.createElement('div');
    content.className = 'content';
    main.appendChild(content);
};