"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var NewTaskComponent = (function () {
    function NewTaskComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
    }
    NewTaskComponent.prototype.addTask = function (headTask, desc, deadline) {
        this.dataService.addData(headTask, desc, deadline);
    };
    NewTaskComponent.prototype.deleteTask = function (headTask) {
        this.dataService.deleteData(headTask);
    };
    NewTaskComponent.prototype.getHeadTask = function (headTask) {
        this.dataService.getHeadTask(headTask);
    };
    NewTaskComponent.prototype.getDesc = function (headTask) {
        this.dataService.getDesc(headTask);
    };
    NewTaskComponent.prototype.getDeadline = function (headTask) {
        this.dataService.getDeadline(headTask);
    };
    NewTaskComponent.prototype.ngOnInit = function () {
        this.items = this.dataService.getData();
    };
    return NewTaskComponent;
}());
NewTaskComponent = __decorate([
    core_1.Component({
        selector: 'newTask',
        template: "<div class = \"panel\">\n    <div class = \"form-inline\">\n        <div class = \"form-group\">\n            <div class = \"col-md-8\">\n                <input class = \"form-control\" [(ngModel)]=\"headTask\" placeholder=\"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\" />\n            </div>\n        </div>\n    </div>\n        <div class = \"form-group\">\n            <div class = \"col-md-6\">\n                <input class = \"form-control\" [(ngModel)]=\"desc\" placeholder=\"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\" />\n            </div>\n        </div>\n        <div class = \"form-group\">\n            <div class = \"col-md-4\">\n                <input type = \"text\" class = \"form-control\" [(ngModel)]=\"deadline\" placeholder=\"\u041A\u0440\u0430\u0439\u043D\u0438\u0439 \u0441\u0440\u043E\u043A\" />\n            </div>\n        </div>\n        <div class = \"form-group\">\n            <div class = \"col-md-offset-2 col-md-8\">\n                <button class=\"btn btn-default\" (click)=\"addTask(headTask, desc, deadline)\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443</button>\n            </div>\n        </div>\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</th>\n                    <th>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</th>\n                    <th>\u041A\u0440\u0430\u0439\u043D\u0438\u0439 \u0441\u0440\u043E\u043A</th>\n                    <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435</th>\n                </tr>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{item.headTask}}</td>\n                    <td>{{item.desc}}</td>\n                    <td>{{item.deadline}}</td>\n                    <td><button class = \"btn btn-default\" click=\"getHeadTask()\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button></td>\n                    <td><button class = \"btn btn-default\" (click)=\"deleteTask()\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></td>\n                    <td><button class = \"btn btn-default\" click=\"upTask()\">\u0412\u0432\u0435\u0440\u0445</button></td>\n                    <td><button class = \"btn btn-default\" (click)=\"downTask()\">\u0412\u043D\u0438\u0437</button></td>\n                </tr>\n            </thead>\n        </table>\n        <div class = \"form-inline-2\">\n        <div class = \"form-group-2\">\n            <div class = \"col-md-8\">\n                <input class = \"form-control\" [(ngModel)]=\"headTask\" placeholder=\"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\" />\n            </div>\n        </div>\n    </div>\n        <div class = \"form-group\">\n            <div class = \"col-md-6\">\n                <input class = \"form-control\" [(ngModel)]=\"desc\" placeholder=\"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\" />\n            </div>\n        </div>\n        <div class = \"form-group\">\n            <div class = \"col-md-4\">\n                <input type = \"text\" class = \"form-control\" [(ngModel)]=\"deadline\" placeholder=\"\u041A\u0440\u0430\u0439\u043D\u0438\u0439 \u0441\u0440\u043E\u043A\" />\n            </div>\n        </div>\n        <div class = \"form-group\">\n            <div class = \"col-md-offset-2 col-md-8\">\n                <button class=\"btn btn-default\" (click)=\"changeTask(headTask, desc, deadline)\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443</button>\n            </div>\n        </div>\n        \n</div>",
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], NewTaskComponent);
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=newTask.component.js.map