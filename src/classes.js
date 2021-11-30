module.exports = class todoItem {
    constructor(task, dueDate, time, array) {
        this.task = task;
        this.dueDate = dueDate;
        this.time = time;
        this.status = 'incomplete';
        this.id = 0;
        this.assignId = function () {
            const arrayId = array.map(a => a.id);
            const randomId = getRandomInt(1000);
            if (arrayId.includes(randomId)) {
                this.assignId();
            }
            else {
                this.id = randomId;
            }
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
        };
    }
}

module.exports = class project {
    constructor(name) {
        this.name = name;
        this.status = 'empty';
        this.id = 0;
        this.assignId = function () {
            const arrayId = array.map(a => a.id);
            const randomId = getRandomInt(1000);
            if (arrayId.includes(randomId)) {
                this.assignId();
            }
            else {
                this.id = randomId;
            }
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
        };
    }
}