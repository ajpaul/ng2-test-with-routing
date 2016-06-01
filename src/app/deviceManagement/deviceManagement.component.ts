import { Component } from '@angular/core';

@Component({
    selector: 'device-management',
    template:
    `
    <h2>Welcome to the {{ title }}</h2>
    `
})

export class DeviceManagementComponent {
    title: string = 'Device Management'; 
}