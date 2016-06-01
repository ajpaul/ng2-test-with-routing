import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

//-------------------------------------------------------------------
// CONSTANTS
//-------------------------------------------------------------------
export const CHANGE_NAME = 'CHANGE_NAME';

//-------------------------------------------------------------------
// APP STORE INTERFACE (for typesafe stuff)
//-------------------------------------------------------------------
export interface AppStore {
	name: string;
};

//-------------------------------------------------------------------
// NAMES REDUCER
//-------------------------------------------------------------------
export const names = (state = "Danny",  action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.payload;
		default:
			return state;
	}
};

//-------------------------------------------------------------------
// NAME MODEL
//-------------------------------------------------------------------
@Injectable()
export class Names {
	name$: Observable<any>;

	constructor(private _store: Store<AppStore>) {
		this.name$ = _store.select('names');
	}

	updateName(e): void {
		this._store.dispatch(e);
	}
}