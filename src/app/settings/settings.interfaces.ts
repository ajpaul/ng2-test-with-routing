export interface ICodebook {
    
    name: string;
    symbolPattern: number[];
    count: number;
    codewords: string[];
    lastUpdated: string; //okay it's really a date but I don't know ng that well yet
    updatedBy: string;
}

export interface IMobileConfig {
    sdkVersion: string;
    configurationString: string;
    lastUpdated: string;
    updatedBy: string;
}