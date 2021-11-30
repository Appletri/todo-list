
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
const All = [];
const allProjects = []

export{navArrMain,projects,selectableNavArrMain,selNavArrList,Today,Week,All};