import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  personArr: Person[] = [
    new Person('Branson', 'Perkins', 26),
    new Person('Caleb', 'Perkins', 22),
    new Person('Kenny', 'Perkins', 49),
    new Person('Jennifer', 'Perkins', 48)
  ];

  constructor() { }

  getPerson(): Observable<Person[]> {
     return of(this.personArr.filter((person) => {
       return ('Name: ' + person.getFullName() + ', Age: ' + person.getAge());
     }));
  }
}
