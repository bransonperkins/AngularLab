function sayHello(person) {
    return "Hello, " + person;
}
var user = "Branson Perkins";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, company, hourlyWage, hours) {
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        if (hourlyWage) {
            this.hourlyWage = hourlyWage;
        }
        else {
            this.hourlyWage = 0;
        }
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 0;
        }
        if (occupation) {
            this.occupation = occupation;
        }
        else {
            this.occupation = "Unemployed";
        }
        if (company) {
            this.company = company;
        }
        else {
            this.company = "";
        }
    }
    // getters and setters (accessors and mutators)
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.getCompany = function () {
        return this.company;
    };
    Person.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    };
    Person.prototype.getHours = function () {
        return this.hours;
    };
    // Method that returns full name of person
    Person.prototype.getFullName = function () {
        return this.getFirstName() + " " + this.getLastName();
    };
    // Method that returns name and occupation
    Person.prototype.personDetails = function () {
        if ((this.getOccupation() === "Student") || (this.getOccupation() === "student")) {
            return this.getFirstName() + " " + this.getLastName() + " is a "
                + this.getOccupation() + " currently.";
        }
        else {
            return this.getFirstName() + " " + this.getLastName() + " works as a " + this.getOccupation() + " at " + this.getCompany() + ".";
        }
    };
    // Method that calculates weekly wage
    Person.prototype.weeklyWage = function (hours) {
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 40;
        }
        return "Weekly wage is $" + this.hours * this.getHourlyWage() + ".";
    };
    Person.prototype.addCerts = function () {
        var _a;
        var certifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certifications[_i] = arguments[_i];
        }
        (_a = this.certifications).push.apply(_a, certifications);
        for (var cert in certifications) {
            // use loop to print the array contents
            console.log(certifications[cert]);
        }
        return "Certifications: " + this.certifications.join(", ");
    };
    return Person;
}());
var person1 = new Person("Branson", "Perkins", 26, "704-305-0653", "NC", 28269, "Software Developer", "Ally", 15, 40);
var person2 = new Person("Noelle", "Brinkley", 25, "336-403-0958", "NC", 28269, "Student");
var person3 = new Person("Caleb", "Perkins", 22, "704-305-4775", "NC", 28025, "Concrete Construction Worker", "Concrete Solutions", 11, 30);
document.getElementById("person1").innerHTML = person1.personDetails();
document.getElementById("person2").innerHTML = person2.personDetails();
document.getElementById("person3").innerHTML = person3.personDetails();
document.getElementById("pay1").innerHTML = person1.weeklyWage();
document.getElementById("pay2").innerHTML = person2.weeklyWage(0);
document.getElementById("certs").innerHTML = person1.addCerts("Java", "HTML", "CSS", "SQL");
function createPerson(option) {
    var newPerson = { firstName: "Jim", lastName: "Bob", age: null, phoneNumber: null, state: null, zipCode: null,
        occupation: null, company: null, hourlyWage: null, hours: null };
    newPerson.firstName = option.firstName;
    newPerson.lastName = option.lastName;
    if (option.age) {
        newPerson.age = option.age;
    }
    if (option.phoneNumber) {
        newPerson.phoneNumber = option.phoneNumber;
    }
    if (option.state) {
        newPerson.state = option.state;
    }
    if (option.zipCode) {
        newPerson.zipCode = option.zipCode;
    }
    if (option.occupation) {
        newPerson.occupation = option.occupation;
    }
    if (option.hourlyWage) {
        newPerson.hourlyWage = option.hourlyWage;
    }
    if (option.hours) {
        newPerson.hours = option.hours;
    }
    return newPerson;
}
function printPerson(person) {
    var personString = person.firstName + " " + person.lastName;
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
var person4 = createPerson({ firstName: "Billy", lastName: "Goat", age: 69 });
console.log(person4);
document.getElementById("name-only").innerHTML = printPerson(person4);
