"use strict";
var tasks_1 = require("./tasks");
var DataService = (function () {
    function DataService() {
        this.data = [
            { headTask: "Head of task 1", desc: "Description of task 1", deadline: "25.12.2017" },
            { headTask: "Head of task 2", desc: "Description of task 2", deadline: "26.12.2017" }
        ];
    }
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.addData = function (headTask, desc, deadline) {
        this.data.push(new tasks_1.Task(headTask, desc, deadline));
    };
    DataService.prototype.deleteData = function (headTask) {
        this.data.splice(this.data.indexOf(tasks_1.Task[headTask]), 1);
    };
    DataService.prototype.getHeadTask = function (headTask) {
        var num = this.data.indexOf(tasks_1.Task[headTask]);
        return this.data[num].headTask;
    };
    DataService.prototype.getDesc = function (headTask) {
        var num = this.data.indexOf(tasks_1.Task[headTask]);
        return this.data[num].desc;
    };
    DataService.prototype.getDeadline = function (headTask) {
        var num = this.data.indexOf(tasks_1.Task[headTask]);
        return this.data[num].deadline;
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map