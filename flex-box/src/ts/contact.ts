class Contact {
    name: string;
    address: string;
    age: number;

    constructor(name: string, address: string, age?: number) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
}

let c = new Contact("vsos", "pho quang");

console.log(JSON.stringify(c));