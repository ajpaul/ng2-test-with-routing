import { Component } from '@angular/core';

@Component({
    selector: 'valid',
    template:
    `
    <h3>Congrats on selecting a {{ title }}
    `
})

export class ValidComponent {
    title: string = "valid component";
}