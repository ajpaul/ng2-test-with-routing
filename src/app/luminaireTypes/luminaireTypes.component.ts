import { Component } from '@angular/core';

@Component({
    selector: 'luminaire-types',
    template:
    `
    <h2>Welcome to the {{ title }}</h2>
    `
})

export class LuminaireTypesComponent {
    title: string = 'Luminaire Types Component'; 
}