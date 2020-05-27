export class Person {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    // Method that returns full name of person
    getFullName(): string {
        return this.getFirstName() + ' ' + this.getLastName();
    }

}
