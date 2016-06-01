import { Component } from '@angular/core';

@Component({
    selector: 'site-management',
    template:
    `
    <h2>Welcome to the {{ title }}</h2>
    `
})

export class SiteManagementComponent {
    title: string = 'Site Management Component'; 
}