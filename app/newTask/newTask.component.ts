import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Task } from './tasks';



@Component ({
    selector: 'newTask',
    template: `<div class = "panel">
    <div class = "form-inline">
        <div class = "form-group">
            <div class = "col-md-8">
                <input class = "form-control" [(ngModel)]="headTask" placeholder="Заголовок" />
            </div>
        </div>
    </div>
        <div class = "form-group">
            <div class = "col-md-6">
                <input class = "form-control" [(ngModel)]="desc" placeholder="Описание" />
            </div>
        </div>
        <div class = "form-group">
            <div class = "col-md-4">
                <input type = "text" class = "form-control" [(ngModel)]="deadline" placeholder="Крайний срок" />
            </div>
        </div>
        <div class = "form-group">
            <div class = "col-md-offset-2 col-md-8">
                <button class="btn btn-default" (click)="addTask(headTask, desc, deadline)">Создать задачу</button>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Описание</th>
                    <th>Крайний срок</th>
                    <th>Действие</th>
                </tr>
                <tr *ngFor="let item of items">
                    <td>{{item.headTask}}</td>
                    <td>{{item.desc}}</td>
                    <td>{{item.deadline}}</td>
                    <td><button class = "btn btn-default" click="getHeadTask()">Редактировать</button></td>
                    <td><button class = "btn btn-default" (click)="deleteTask()">Удалить</button></td>
                    <td><button class = "btn btn-default" click="upTask()">Вверх</button></td>
                    <td><button class = "btn btn-default" (click)="downTask()">Вниз</button></td>
                </tr>
            </thead>
        </table>
        <div class = "form-inline-2">
        <div class = "form-group-2">
            <div class = "col-md-8">
                <input class = "form-control" [(ngModel)]="headTask" placeholder="Заголовок" />
            </div>
        </div>
    </div>
        <div class = "form-group">
            <div class = "col-md-6">
                <input class = "form-control" [(ngModel)]="desc" placeholder="Описание" />
            </div>
        </div>
        <div class = "form-group">
            <div class = "col-md-4">
                <input type = "text" class = "form-control" [(ngModel)]="deadline" placeholder="Крайний срок" />
            </div>
        </div>
        <div class = "form-group">
            <div class = "col-md-offset-2 col-md-8">
                <button class="btn btn-default" (click)="changeTask(headTask, desc, deadline)">Изменить задачу</button>
            </div>
        </div>
        
</div>`,

    providers: [ DataService ]

})
export class NewTaskComponent implements OnInit {

    items: Task[] = [];
    constructor(private dataService: DataService){}

    addTask(headTask: string, desc: string, deadline: string){

        this.dataService.addData(headTask, desc, deadline);
    }

    deleteTask(headTask: string){

        this.dataService.deleteData(headTask);
    }

    getHeadTask(headTask: string){
        this.dataService.getHeadTask(headTask);
    }

    getDesc(headTask: string){
        this.dataService.getDesc(headTask);
    }

    getDeadline(headTask: string){
        this.dataService.getDeadline(headTask);
    }

    ngOnInit(){
        this.items = this.dataService.getData();
    }

}