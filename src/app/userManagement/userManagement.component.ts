import { Component } from '@angular/core';

@Component({
    selector: 'user-management',
    template:
    `
    <h2>Welcome to the {{ title }}</h2>
    `
})

export class UserManagementComponent {
    title: string = 'User Management Component'; 
}