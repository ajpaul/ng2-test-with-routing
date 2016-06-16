import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LuminaireType} from '../luminaireTypes/luminaireTypes.reducer';

//-------------------------------------------------------------------
// CONSTANTS
//-------------------------------------------------------------------
export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_AND_CHANGE_NAME = 'ADD_AND_CHANGE_NAME';
export const DELETE_NAME = 'DELETE_NAME';

//-------------------------------------------------------------------
// APP STORE INTERFACE (for typesafe stuff)
//-------------------------------------------------------------------
export interface AppStore {
	name: string;
	allNames: string[];
	lumTypes: LuminaireType[];
};

//-------------------------------------------------------------------
// NAMES REDUCER
//-------------------------------------------------------------------
export const names = (state = ["Danny"],  action) => {

	if(action.payload)	
		console.log('ACTION:', action.type, action.payload);

	switch (action.type) {
		case CHANGE_NAME:
			return [action.payload];

		case ADD_AND_CHANGE_NAME:
			return state.concat(action.payload);

		case DELETE_NAME:
			//I think this actually sets element to null and doesn't delete it
			//I should probably splice instead or use .map or something
			return state.filter( name => delete state[action.payload]);	

		default:
			return state;
	}
};

//-------------------------------------------------------------------
// NAME MODEL
//-------------------------------------------------------------------
@Injectable()
export class Names {
	name$: Observable<any>; //shouldn't this be of a certain type? idk

	constructor(private _store: Store<AppStore>) {
		
		//names is our reducer
		this.name$ = _store.select('names');

		//this is the typesafe equivalent of the line above
		//this.name$ = _store.select(state => state.names);

		_store.subscribe(state => console.log(state));
	}

	updateName(e): void {
		this._store.dispatch(e);
	}
}