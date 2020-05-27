export class Person {
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

    constructor(firstName: string, lastName: string) {
        this.firstName = this.firstName;
        this.lastName = this.lastName;
    }

    // constructor(firstName: string, lastName: string, age?: number, phoneNumber?: string, state?: string, zipCode?: number, occupation?: string, company?: string, hourlyWage?: number, hours?: number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //     this.phoneNumber = phoneNumber;
    //     this.state = state;
    //     this.zipCode = zipCode;

    //     if (hourlyWage) {
    //         this.hourlyWage = hourlyWage;
    //     } else {
    //         this.hourlyWage = 0;
    //     }
        
    //     if (hours) {
    //         this.hours = hours;
    //     } else {
    //         this.hours = 0;
    //     }

    //     if (occupation) {
    //         this.occupation = occupation;
    //     } else {
    //         this.occupation = "Unemployed";
    //     }

    //     if (company) {
    //         this.company = company;
    //     } else {
    //         this.company = "";
    //     }
    // }

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