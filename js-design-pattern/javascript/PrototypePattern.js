var Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function() {
    console.log('completing Task : ' + this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving Task : ' + this.name);
};

var task1 = new Task('Task1');
var task2 = new Task('Task2');
var task3 = new Task('Task3');
var task4 = new Task('Task4');

task1.complete();
console.log(task1.completed);

task2.save();
task3.save();
task4.save();
task4.complete();
console.log(task4.completed);
