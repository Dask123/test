import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './newTask.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ NewTaskComponent ],
    bootstrap: [ NewTaskComponent ]
})

export class NewTaskModule{ }

