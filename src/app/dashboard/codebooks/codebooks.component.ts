import { Component } from '@angular/core';

@Component({
    selector: 'codebooks',
    template:
    `
    <h3>Welcome to the {{ title }}</h3>
    `
})

export class CodebooksComponent{
    title: string = 'Codebooks Component';
}