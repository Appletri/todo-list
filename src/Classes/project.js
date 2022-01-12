/* eslint-disable no-use-before-define */
module.exports = class Project {
  constructor(name, parentArray) {
    this.name = name;
    this.tasks = [];
    this.id = 0;

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
