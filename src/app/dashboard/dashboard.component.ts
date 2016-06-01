import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { CodebooksComponent } from './codebooks/codebooks.component';
import { MobileConfigsComponent } from './mobileConfigs/mobileConfigs.component';

@Component({
    selector: 'dashboard',
    templateUrl: '../src/app/dashboard/dashboard.component.html',
    directives: [ROUTER_DIRECTIVES],
})

@Routes([
    { path: '/codebooks', component: CodebooksComponent },
    { path: '/mobile-configs', component: MobileConfigsComponent }
])

export class DashboardComponent {
    title: string = 'Dashboard Component'; 
}