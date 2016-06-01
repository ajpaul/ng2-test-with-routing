import { Component } from '@angular/core';

@Component({
    selector: 'mobile-configs',
    template:
    `
    <h3>Welcome to the {{ title }}</h3>
    `
})

export class MobileConfigsComponent{
    title: string = 'Mobile Configs Component';
}