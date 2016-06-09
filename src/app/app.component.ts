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
import { ValidComponent } from './userManagement/valid.component';
import { Names } from './name'

import '../style/styles.less';

@Component({
   selector: 'app',
   templateUrl :'../src/app/app.component.html',
   styleUrls: ['../src/app/app.component.css'],
   providers: [Names],
   directives: [ROUTER_DIRECTIVES, UserManagementComponent],
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
    { path: '/valid', component: ValidComponent },    
    { path: '/settings', component: SettingsComponent }
])

export class AppComponent {
    title: string = "IPS Admin";
    headerTitle: string = "Header";
    navWidth: number = 0;
    secondaryNavWidth: number = 0;
    borderRight: string = "0px solid #000";
    backgroundColor: string = "rgba(0,0,0,0)";

    constructor(public names: Names) {
        
    }
    
    //close both nav panes
    sideNavCascadingClose(): void {
        
        var that = this;
        
        if (this.secondaryNavWidth > 0){
            this.secondaryNavWidth = 0;
            this.borderRight = "0px solid #000";
        } else
            this.navWidth = 0; 
        
    }
    
    //for when you need to force the nav closed
    sideNavClose(): void{
        
        this.backgroundColor = "rgba(0,0,0,0)";       
        this.sideNavCascadingClose();
    }
    
    sideNavClick(): void{
      
            //close
            if(this.navWidth > 0){
                this.backgroundColor = "rgba(0,0,0,0)";
                this.sideNavCascadingClose();
            }
            //open
            else {
                //rgba doesn't work on controls apparently
                this.backgroundColor = "rgba(0,0,0,0.4)";             
                this.navWidth = 200;
            }
    }
    

    
    secondaryRouting(): void {
        
        //this.userManagement.blah();
        //secondary nav width and border right should be moved to usermanagement
        
        //open the secondary nav
        if(this.secondaryNavWidth === 0){
            this.secondaryNavWidth = 200;
        }
        //close the secondary nav
        else
            this.sideNavCascadingClose();
    }
}