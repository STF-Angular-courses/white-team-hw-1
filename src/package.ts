import {IPostDepartment} from "./post-department";
import {ILogger} from "./interfaces";
import {IOrganization} from "./organization";
import {IPerson} from "./person";

export interface IPackage {
    client: IOrganization | IPerson;
    startingPoint: IPostDepartment;
    destinationPoint : IPostDepartment;
}

export default class Package implements IPackage, ILogger {

}