import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {
  persons: Person[];

  constructor(personService: PersonService) {
    this.persons = personService.getPerson();
  }

  ngOnInit(): void {
    this.persons.join(', ');
  }

}
