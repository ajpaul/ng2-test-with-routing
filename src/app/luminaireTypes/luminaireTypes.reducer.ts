export interface LuminaireType {
    id?: number;
    name?: string;
    externalWidth?: number;
    externalLength?: number;
    // internalWidth?: number;
    // internalLength?: number;
    // createdBy?: string;
}

export const ADD_LUMTYPE = 'ADD_LUMTYPE';
export const REMOVE_LUMTYPE = 'REMOVE_LUMTYPE';

//this number might represent the number of lum types we get from the http service
//right now we have 1 hardcoded value in our service so that's why I chose 1
let startCount: number = 1; 

export const luminaireTypes = (allLumTypes = [], {type, payload}) => {

    switch (type) {
        case ADD_LUMTYPE:
            return allLumTypes.concat([Object.assign({}, payload, {id: startCount++, externalWidth: payload.externalWidth, externalLength: payload.externalLength})]);

        case REMOVE_LUMTYPE:
            return allLumTypes.filter(lum => lum.id !== payload);

        default:
            return allLumTypes;
    }
}