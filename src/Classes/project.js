module.exports = class project {
    constructor(name, parentArray) {
        this.name = name;
        this.tasks = [];
        this.status = 'empty';
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
        }

        // setstatus(value){
        //     this.status = value;
        // }
    
        // getstatus(){
        //     if (this.tasks.length === 0){
        //         return 'empty';
        //     }
        //     else {
        //         return 'not empty';
        //     }
        // }
    }
}