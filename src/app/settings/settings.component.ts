import { Component } from '@angular/core';
import { SettingsService } from './settings.service';
import { ICodebook, IMobileConfig } from './settings.interfaces';

@Component({
    selector: 'settings',
    templateUrl: '../src/app/settings/settings.component.html',
    providers: [SettingsService]
})

export class SettingsComponent {
    title: string = 'Settings Component'; 
    codebookTitle: string = 'Codebooks';
    mobileConfigTitle: string = 'Mobile Config Files';
    apiKeyTitle: string = 'API Keys';
    sharedApplicationSettingsTitle: string = 'Shared Application Settings';
    codebooks: ICodebook[];
    mobileConfigs: IMobileConfig[];
    
    sharedApplicationSettings: any[] = []; //no data causes our grid to be hidden
    
    constructor(private _settingsService: SettingsService) {
        
        //this should probably be moved into an ngOnInit or something and
        //out of the constructor!
        this.codebooks = this._settingsService.getCodebooks();
        this.mobileConfigs = this._settingsService.getMobileConfigs();
    }
    
    //not using a service, just using hard-coded local data
    apiKeys: any[] = [
        {
            "apiKey": 12345,
            "description": "Adam's key",
            "status": "Active",
            "type": "Public",
            "lastUpdated": "Today",
            "updatedBy": "Danny"
        },
        {
            "apiKey": 23456,
            "description": "Danny's key",
            "status": "Inactive",
            "type": "Super secret",
            "lastUpdated": "A long time ago",
            "updatedBy": "Adam"
        }];
}