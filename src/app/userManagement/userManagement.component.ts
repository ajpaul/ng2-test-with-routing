import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ValidComponent } from './valid.component';

@Component({
    selector: 'user-management',
    templateUrl: '../src/app/userManagement/userManagement.component.html',
    styleUrls: ['../src/app/userManagement/userManagement.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class UserManagementComponent {
    title: string = 'User Management Component'; 
}