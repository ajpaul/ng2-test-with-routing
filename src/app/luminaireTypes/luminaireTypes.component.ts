import { Component } from '@angular/core';
import { LuminaireTypes } from './luminaireTypes';

@Component({
    selector: 'luminaire-types',
    templateUrl: '../src/app/luminaireTypes/luminaireTypes.component.html'
})

export class LuminaireTypesComponent {
    title: string = 'Luminaire Types Component'; 
    luminaireTypes: LuminaireTypes[];
    newLumType;
    
    //why isn't the list being populated on first load?
        
    constructor() {
        //something is wrong here
        //it is waiting until you click in the dom to do some of this stuff
        //h2 isn't added and list of luminaireTypes isn't showing on load
        console.log("Luminaire Types initialized (constructor)");
        this.luminaireTypes = [];
        let first = {name: "ESL 2x4", externalWidth: 2, externalLength: 2};
        this.luminaireTypes.push(first);
        this.newLumType = '';
    }
    
    addLumType(event): void {
        let lum = {name: this.newLumType, externalWidth: 2, externalLength: 2};
        this.luminaireTypes.push(lum);
        this.newLumType = '';
        event.preventDefault();
    }
    
    deleteLumType(index): void {
        this.luminaireTypes.splice(index, 1);
    }
}