import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { taskMsg } from './app.component'

@NgModule ({
    imports: [ BrowserModule ],
    declarations: [ taskMsg ],
    bootstrap: [ taskMsg ]
})
export class taskMsgAppModule {}

