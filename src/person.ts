import {ILogger} from "./interfaces";

export interface IPerson {
    name: string;
    id: string;
    age: number;
    category: string;
    address: string;
    telephone: string;
    discount: number | boolean;
    items: IPackage[];
}

export default class Person implements IPerson, IClient, ILogger {
    constructor (
        public name: string,
        public id: string,
        public age: number,
        public category: string,
        public address: string,
        public telephone: string,
        public discount: number | boolean,
        public items: IPackage[]  = []
    ) {}
    logData() {
        console.log(
            '\nPerson client: ' + this.name +
            'ID: ' + this.id + '\n' +
            'Age: ' + this.age + '\n' +
            'Category: ' + this.category + '\n' +
            'Discount: ' + this.discount + '\n' +
            'Address: ' + this.address + '\n' +
            'Tel: ' + this.telephone + '\n' +
            'Packages Count: ' + this.items.length + '\n'
        );
    }
}
