import { Component, OnInit } from '@angular/core';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';

@Component({
  selector: 'device-management',
  templateUrl: '../src/app/deviceManagement/deviceManagement.component.html',
  styleUrls: ['../src/app/deviceManagement/deviceManagement.component.css'],
  directives: [MdButton, MdCard, MdInput]
})

export class DeviceManagementComponent implements OnInit {
    title: string = 'Device Management'; 
    buttonText: string = 'Click me and something will happen!'

    //this is a lifecycle hook?
    ngOnInit(): void {
      console.log('ngOnInit() called for deviceManagement');
    }

    doSomething(): void {
        alert("something!");
    }
}