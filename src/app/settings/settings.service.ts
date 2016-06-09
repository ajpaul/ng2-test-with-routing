import { Injectable } from '@angular/core';
import { ICodebook, IMobileConfig } from './settings.interfaces';

@Injectable()

export class SettingsService {
    
    getCodebooks(): ICodebook[] {
        return [
        {
            "name": "Codebook 1",
            "symbolPattern": [1,2,3,4,5],
            "count": 5,
            "codewords": ["code", "word"],
            "lastUpdated": "Today",
            "updatedBy": "Danny"
        },
        {
            "name": "Codebook 2",
            "symbolPattern": [2,3,4,5,6],
            "count": 5,
            "codewords": ["code", "werdz"],
            "lastUpdated": "Yesterday",
            "updatedBy": "Danny"
        }];
    }
    
    getMobileConfigs(): IMobileConfig[] {
       return [
        {
            "sdkVersion": "1.0.1.0.1",
            "configurationString": "Config settings here!",
            "lastUpdated": "Today",
            "updatedBy": "Danny"
        },
        {
            "sdkVersion": "1.2.3.4.5",
            "configurationString": "More config settings",
            "lastUpdated": "Yesterday",
            "updatedBy": "Danny"
        }];
    }
}