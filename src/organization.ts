import {ILogger} from "./interfaces";

export interface IOrganization {
    id: string;
    type: string;
    name: string;
    address: string;
    telephone: string;
    owner: string | IOrganisation | IPerson;
    departments: IPostDepartment;  //IDepartment??
}

export default class Organization implements IOrganization, ILogger {
    constructor(
        public id: string,
        public type: string,
        public name: string,
        public address: string,
        public telephone: string,
        public owner: string | IOrganisation | IPerson,
        public departments: IPostDepartment = []
    ) { }
    logData() {
        console.log(
            '\nCompany: ' + this.name +
            'ID: ' + this.id + '\n' +
            'Type: ' + this.type + '\n' +
            'Address: ' + this.address + '\n' +
            'Tel: ' + this.telephone + '\n' +
            'Owner: ' + this.owner + '\n' +
            'Office Count: ' + this.departments.length + '\n'
        );
    }
}
