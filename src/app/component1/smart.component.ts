import { Component} from '@angular/core';

import { Names } from './name'
import { DumbComponent1 } from './dumb1.component';

@Component({
	selector: 'smart1',
	template:
	`
		<div>This is a 'smart' container component with a nested dumb component</div><br/>
		<dumb1 (action)="names.updateName($event)"></dumb1>
	`,
	directives:[DumbComponent1]
})

export class SmartComponent1 {

	constructor(public names: Names) {

	}
	
}