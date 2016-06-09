import { Component } from '@angular/core';

@Component({
    selector: 'device-management',
    template:
    `
    <h2>Welcome to the {{ title }}</h2>
    <h4>Let's build an ngrx/store widget on this tab</h4>
    `
})

export class DeviceManagementComponent {
    title: string = 'Device Management'; 
}