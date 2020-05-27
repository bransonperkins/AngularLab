import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personArr: Person[] = [
    new Person('Branson', 'Perkins', 26),
    new Person('Caleb', 'Perkins', 22),
    new Person('Kenny', 'Perkins', 22),
    new Person('Jennifer', 'Perkins', 22)
  ];

  constructor() { }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }

  getPerson(): Person[] {
    return this.personArr.filter((person) => {
      this.delay(4000);
      return ('Name: ' + person.getFullName() + ', Age: ' + person.getAge());
    });
  }
}
