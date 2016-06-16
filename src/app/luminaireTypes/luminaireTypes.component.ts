import { Component } from '@angular/core';
import { LuminaireTypes } from './luminaireTypes';
import { Store } from '@ngrx/store';
import { AppStore } from '../component1/name';
import * as LumTypeActions from './luminaireTypes.reducer';

@Component({
    selector: 'luminaire-types',
    templateUrl: '../src/app/luminaireTypes/luminaireTypes.component.html'
})

export class LuminaireTypesComponent {
    title: string = 'Luminaire Types Component'; 
    luminaireTypes: LuminaireTypes[] = [];
    id: number = 1;
    newLumType;
    
    //why isn't the list being populated on first load?
        
    constructor(private _store : Store<AppStore>) {
        //something is wrong here
        //it is waiting until you click in the dom to do some of this stuff
        //h2 isn't added and list of luminaireTypes isn't showing on load
        console.log("Luminaire Types initialized (constructor)");
        this.luminaireTypes = [];
        this.newLumType = '';
    }
    
    addLumType(event): void {

        let externalWidth: number = event.currentTarget[1].value;
        let externalLength: number = event.currentTarget[2].value;

        let lum = {id: this.id, name: this.newLumType, externalWidth: externalWidth, externalLength: externalLength};
        this.luminaireTypes.push(lum);
        this.newLumType = '';
        event.preventDefault();
        this.id++;

        this._store.dispatch({
            type: LumTypeActions.ADD_LUMTYPE,
            payload: lum
        });
    }
    
    deleteLumType(index): void {
        this._store.dispatch({
            type: LumTypeActions.REMOVE_LUMTYPE,
            payload: index
        });
        this.luminaireTypes.splice(index, 1);
    }
}