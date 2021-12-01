module.exports = class task {
    constructor(task, dueDate, time, parentArray) {
        this.task = task;
        this.dueDate = dueDate;
        this.time = time;
        this.status = 'incomplete';
        this.id = 0;
        this.assignId = function () {
            const arrayId = parentArray.map(a => a.id);
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