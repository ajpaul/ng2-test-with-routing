import { Component, EventEmitter, Output } from '@angular/core';
import * as NameActions from './name';

@Component({
	selector: 'dumb1',
	template: 
	`
		<div>This is a dumb component.</div>
		<input type="text" [(ngModel)]="name"><br/>
		<button type="button" (click)="changeName()">Start Over With New Name</button>
		<button type="button" (click)="addName()">Add Another Name</button>

		<div style="margin-top: 20px;">
		<input #nameIndex type="number"><br/>
		<button type="button" (click)="deleteIndex(nameIndex.value)">Delete name at index provided</button>
		</div>
	`
})

export class DumbComponent1 { 
	name: string = "";

	@Output() action = new EventEmitter();

	//pass the action type in the event parameter
	changeName() {
		this.action.emit({ type: NameActions.CHANGE_NAME, payload: this.name });
	}

	addName() {
		this.action.emit({ type: NameActions.ADD_AND_CHANGE_NAME, payload: this.name });
	}

	deleteIndex(nameIndex: number) {
		this.action.emit({ type: NameActions.DELETE_NAME, payload: nameIndex });
	}
}