import {IOrganization} from "./organization";
import {IPackage} from "./package";
import {ILogger} from "./interfaces";

export interface IPostDepartment {
    owner: IOrganization;
    packages: Array<IPackage>;
}

export default class PostDepartment implements IPostDepartment, ILogger {
    constructor(public owner: IOrganization, public packages: Array<IPackage>) {
    }

    logData: () => {};
}
