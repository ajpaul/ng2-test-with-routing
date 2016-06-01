import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SmartComponent1 } from './component1/smart.component';
import { DumbComponent2 } from './component2/dumb2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteManagementComponent } from './siteManagement/siteManagement.component';
import { LuminaireTypesComponent } from './luminaireTypes/luminaireTypes.component';
import { DeviceManagementComponent } from './deviceManagement/deviceManagement.component';
import { UserManagementComponent } from './userManagement/userManagement.component';
import { SettingsComponent } from './settings/settings.component';
import { Names } from './name'

import '../style/styles.less';

@Component({
   selector: 'app',
   templateUrl :'../src/app/app.component.html',
   styleUrls: ['../src/app/app.component.css'],
   providers: [Names],
   directives: [ROUTER_DIRECTIVES],
   changeDetection: ChangeDetectionStrategy.OnPush
})

@Routes([
    { path: '/', component: SmartComponent1 },
    { path: '/dumb', component: DumbComponent2 },
    { path: '/dashboard', component: DashboardComponent },
    { path: '/site-management', component: SiteManagementComponent },
    { path: '/luminaire-types', component: LuminaireTypesComponent },
    { path: '/device-management', component: DeviceManagementComponent },
    { path: '/user-management', component: UserManagementComponent },
    { path: '/settings', component: SettingsComponent }
])

export class AppComponent {
    title: string = "App Component Title";

    constructor(public names: Names) {

    }
}