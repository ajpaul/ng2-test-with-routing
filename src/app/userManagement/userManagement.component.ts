import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ValidComponent } from './valid.component';

@Component({
    selector: 'user-management',
    templateUrl: '../src/app/userManagement/userManagement.component.html',
    styleUrls: ['../src/app/userManagement/userManagement.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

// @Routes([
//     //{ path: './valid', component: ValidComponent }   
// ])

export class UserManagementComponent {
    title: string = 'User Management Component'; 
    secondaryNavWidth: number = 0;
    borderRight: string = "0px solid #000";
    
    constructor(){
        
    }
    // closeSecondarySidenav(): void {
        
    //     var that = this;
        
    //     if (this.secondaryNavWidth > 0){
    //         this.secondaryNavWidth = 0;
    //         this.borderRight = "0px solid #000";
    //     } 
    // }
    
    openSecondarySidenav(): void {
        
        var that = this;
                
        //open the secondary nav
        if(this.secondaryNavWidth === 0){
            that.secondaryNavWidth = 200;
            that.borderRight = "3px solid #000";
            //alert("opening secondary nav in user management");
        }
    }
    
}