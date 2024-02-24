"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class AddressImpl {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
    toString() {
        return `${this.street}, ${this.city}, ${this.country}`;
    }
}
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} lives in ${this.address.toString()}`; // Call toString() method explicitly
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "john", new AddressImpl("234 Main st.", "New York", "USA"));
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address.toString()}.`; // Call toString() method explicitly
    }
}
let address = john.getNameWithAddress();
console.log(john); //Employee 
console.log(address); // John lives in 234 Main st., New York, USA
let Mike = new Manager(2, "Mike", new AddressImpl("100 Old Town road", "Phoenix", "Arizona"));
console.log(Mike.getNameWithAddress()); // Mike is a manager at 100 Old Town road, Phoenix, Arizona
