/* eslint-disable no-use-before-define */
module.exports = class Task {
  constructor(task, dueDate, time, parentArray) {
    this.task = task;
    this.dueDate = dueDate;
    this.time = time;
    this.status = 'incomplete';
    this.id = 0;
    this.detail = '';
    this.assignId = () => {
      const arrayId = parentArray.map((a) => a.id);
      const randomId = getRandomInt(1000);
      if (arrayId.includes(randomId)) {
        this.assignId();
      } else {
        this.id = randomId;
      }
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    };
  }
};
