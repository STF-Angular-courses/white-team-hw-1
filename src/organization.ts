import {ILogger} from "./interfaces";

export interface IOrganization {

}

export default class Organization implements IOrganization, ILogger {
    logData() {
        console.log();
    }
}