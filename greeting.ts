function sayHello(person: string): string {
    return "Hello, " + person;
}

var user = "Branson Perkins";

document.getElementById("para").innerHTML = sayHello(user);

class Person {
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: string;
    private state: string;
    private zipCode: number;
    private occupation: string;
    private company: string;
    private hourlyWage: number;
    private hours: number;
    private certifications: string[]=[];

    constructor(firstName: string, lastName: string, age?: number, phoneNumber?: string, state?: string, zipCode?: number, occupation?: string, company?: string, hourlyWage?: number, hours?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;

        if (hourlyWage) {
            this.hourlyWage = hourlyWage;
        } else {
            this.hourlyWage = 0;
        }
        
        if (hours) {
            this.hours = hours;
        } else {
            this.hours = 0;
        }

        if (occupation) {
            this.occupation = occupation;
        } else {
            this.occupation = "Unemployed";
        }

        if (company) {
            this.company = company;
        } else {
            this.company = "";
        }
    }

    // getters and setters (accessors and mutators)
    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getState(): string {
        return this.state;
    }

    getZipCode(): number {
        return this.zipCode;
    }

    getOccupation(): string {
        return this.occupation;
    }

    getCompany(): string {
        return this.company;
    }

    getHourlyWage(): number {
        return this.hourlyWage;
    }

    getHours(): number {
        return this.hours;
    }
    
    // Method that returns full name of person
    getFullName(): string {
        return this.getFirstName() + " " + this.getLastName();
    }

    // Method that returns name and occupation
    personDetails(): string {
        if ((this.getOccupation() === "Student") || (this.getOccupation() === "student")) {
            return this.getFirstName() + " " + this.getLastName() + " is a " 
            + this.getOccupation() + " currently."
        } else {
            return this.getFirstName() + " " + this.getLastName() + " works as a " + this.getOccupation() + " at " + this.getCompany() + ".";
        }
    }

    // Method that calculates weekly wage
    weeklyWage(hours?: number): string {
        if (hours) {
            this.hours = hours;
        } else {
            this.hours = 40;
        }
        return "Weekly wage is $" + this.hours * this.getHourlyWage() + ".";
    }

    addCerts(...certifications: string[]) {
        this.certifications.push(...certifications);
        for(let cert in certifications) {
            // use loop to print the array contents
            console.log(certifications[cert]);
        }

        return "Certifications: " + this.certifications.join(", ");
    }

}


let person1 = new Person("Branson", "Perkins", 26, "704-305-0653", "NC", 28269, "Software Developer", "Ally", 15, 40);

let person2 = new Person("Noelle", "Brinkley", 25, "336-403-0958", "NC", 28269, "Student");

let person3 = new Person("Caleb", "Perkins", 22, "704-305-4775", "NC", 28025, "Concrete Construction Worker", "Concrete Solutions", 11, 30);

document.getElementById("person1").innerHTML = person1.personDetails();
document.getElementById("person2").innerHTML = person2.personDetails();
document.getElementById("person3").innerHTML = person3.personDetails();

document.getElementById("pay1").innerHTML = person1.weeklyWage();
document.getElementById("pay2").innerHTML = person2.weeklyWage(0);

document.getElementById("certs").innerHTML = person1.addCerts("Java", "HTML", "CSS", "SQL");

interface PersonOptions {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: string;
    state?: string;
    zipCode?: number;
    occupation?: string;
    company?: string;
    hourlyWage?: number;
    hours?: number;
    certifications?: string[];
}

function createPerson(option: PersonOptions): {firstName: string, lastName: string, age?: number, phoneNumber?: string, state?: string, zipCode?: number, occupation?: string, company?: string, hourlyWage?: number, hours?: number} {
    let newPerson = {firstName: "Jim", lastName: "Bob", age: null, phoneNumber: null, state: null, zipCode: null, 
    occupation: null, company: null, hourlyWage: null, hours: null};
    
    newPerson.firstName = option.firstName;
    newPerson.lastName = option.lastName;

        if(option.age) {
            newPerson.age = option.age;
        }
        if(option.phoneNumber){
            newPerson.phoneNumber = option.phoneNumber;
        }
        if(option.state){
            newPerson.state = option.state;
        }
        if(option.zipCode){
            newPerson.zipCode = option.zipCode;
        }
        if(option.occupation){
            newPerson.occupation = option.occupation;
        }
        if(option.hourlyWage){
            newPerson.hourlyWage = option.hourlyWage;
        }
        if(option.hours){
            newPerson.hours = option.hours;
        }

    return newPerson;
}

function printPerson(person): string {
    let personString = person.firstName + " " + person.lastName;
    if (person.age != null) {
        personString = personString + ", Age: " + person.age;
    }
    if (person.phoneNumber != null) {
        personString = personString + ", Phone Number: " + person.phoneNumber;
    }
    if (person.state != null) {
        personString = personString + ", State: " + person.state;
    }
    if (person.zipCode != null) {
        personString = personString + ", Zip Code: " + person.zipCode;
    }
    if (person.occupation != null) {
        personString = personString + ", Occupation: " + person.occupation;
    }
    if (person.hourlyWage != null) {
        personString = personString + ", Hourly Wage: " + person.hourlyWage;
    }
    if (person.hours != null) {
        personString = personString + ", Hours: " + person.hours;
    }

    return personString;
}

let person4 = createPerson({firstName: "Billy", lastName: "Goat", age: 69});
console.log(person4);

document.getElementById("name-only").innerHTML = printPerson(person4);