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

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, state: string, zipCode: number, occupation?: string, company?: string, hourlyWage?: number, hours?: number) {
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

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number) {
        this.age = age;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    getState(): string {
        return this.state;
    }

    setState(state: string) {
        this.state = state;
    }

    getZipCode(): number {
        return this.zipCode;
    }

    setZipCode(zipCode: number) {
        this.zipCode = zipCode;
    }

    getOccupation(): string {
        return this.occupation;
    }

    setOccupation(occupation: string) {
        this.occupation = occupation;
    }

    getCompany(): string {
        return this.company;
    }

    setCompany(company: string) {
        this.company = company;
    }

    getHourlyWage(): number {
        return this.hourlyWage;
    }

    setHourlyWage(hourlyWage: number) {
        this.hourlyWage = hourlyWage;
    }

    getHours(): number {
        return this.hours;
    }

    setHours(hours: number) {
        this.hours = hours;
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

    addCerts(...certifications: string[]){
        this.certifications.push(...certifications);
        for(var i = 0; i<certifications.length, i++;){
            console.log(certifications[i]);
            //concat this**
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