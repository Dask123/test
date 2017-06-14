import { Task } from './tasks';

export class DataService {

    private data: Task[] = [
        {headTask: "Head of task 1", desc: "Description of task 1", deadline: "25.12.2017"},
        {headTask: "Head of task 2", desc: "Description of task 2", deadline: "26.12.2017"}
    ];

    getData(): Task[] {
        return this.data;
    }

    addData(headTask: string, desc: string, deadline: string) {

        this.data.push(new Task(headTask, desc, deadline));
    }

    deleteData(headTask: string) {

        this.data.splice(this.data.indexOf(Task[headTask]), 1);

    }

    getHeadTask(headTask: string): string{
        let num =  this.data.indexOf(Task[headTask]);
        return this.data[num].headTask;
    }

    getDesc(headTask: string): string{
        let num =  this.data.indexOf(Task[headTask]);
        return this.data[num].desc;
    }

    getDeadline(headTask: string): string{
        let num =  this.data.indexOf(Task[headTask]);
        return this.data[num].deadline;
    }

}