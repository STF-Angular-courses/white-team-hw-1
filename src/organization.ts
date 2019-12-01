import {ILogger} from "./interfaces";

export interface IOrganization {
    name: string;
}

export default class Organization implements IOrganization, ILogger {
    public name: string;

    logData() {
        console.log();
    }
}