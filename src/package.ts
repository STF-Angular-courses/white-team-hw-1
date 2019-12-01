import {IPostDepartment} from "./post-department";
import {ILogger} from "./interfaces";
import {IOrganization} from "./organization";
import {IPerson} from "./person";

export interface IPackage {
    client: IOrganization | IPerson;
    startingPoint: IPostDepartment;
    destinationPoint : IPostDepartment;
    height : string;
    width : string;
    weight : string;
    price : string;
    type : string;
}

export default class Package implements IPackage, ILogger {
    constructor(public client: IOrganization | IPerson,
                public startingPoint: IPostDepartment,
                public destinationPoint : IPostDepartment,
                public type : string,
                public price : string,
                public height : string,
                public width : string,
                public weight : string) { }
    logData() {
        console.log(`------ Package ------
        Client: ${this.client}
        Starting point: ${this.startingPoint}
        Destination point: ${this.destinationPoint}
        Type: ${this.type}
        Price: ${this.price}
        Height: ${this.height}
        Width: ${this.width}
        Wight: ${this.weight}`);
    }
}