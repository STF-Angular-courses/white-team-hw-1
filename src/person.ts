import {ILogger} from "./interfaces";

export interface IPerson {
    name: string;
}

export default class Person implements IPerson, ILogger {

}
