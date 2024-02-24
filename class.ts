interface Address {
    street: string;
    city: string;
    country: string;
    toString(): string;
}

class AddressImpl implements Address {
    constructor(public street: string, public city: string, public country: string) {}

    toString(): string {
        return `${this.street}, ${this.city}, ${this.country}`;
    }
}

class Employee {
    #id: number ;
    protected name: string ;
    address : Address;

    constructor(id: number, name: string, address: Address ){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string {
        return `${this.name} lives in ${this.address.toString()}`; // Call toString() method explicitly
    }

}

let john = new Employee(1, "john", new AddressImpl("234 Main st.", "New York", "USA"));

class Manager extends Employee {

    constructor(id: number, name: string, address: Address){
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address.toString()}.`; // Call toString() method explicitly
    }

}

let address = john.getNameWithAddress();

console.log(john); //Employee 
console.log(address); // John lives in 234 Main st., New York, USA

let Mike = new Manager (2, "Mike", new AddressImpl("100 Old Town road", "Phoenix", "Arizona"));

console.log(Mike.getNameWithAddress()); // Mike is a manager at 100 Old Town road, Phoenix, Arizona
