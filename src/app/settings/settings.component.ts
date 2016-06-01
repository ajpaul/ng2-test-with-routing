import { Component } from '@angular/core';

@Component({
    selector: 'settings',
    template:
    `
    <h2>Welcome to the {{ title }}</h2>
    `
})

export class SettingsComponent {
    title: string = 'Settings Component'; 
}