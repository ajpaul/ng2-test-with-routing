import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'dumb1',
	template: 
	`
		<div>This is a dumb component.</div>
		<input type="text" [(ngModel)]="name"><br/>
		<button type="button" (click)="changeName()">Submit Name Change</button>
	`
})

export class DumbComponent1 { 
	name: string = "";

	@Output() action = new EventEmitter();

	changeName() {
		this.action.emit({ type: "CHANGE_NAME", payload: this.name });
	}
}