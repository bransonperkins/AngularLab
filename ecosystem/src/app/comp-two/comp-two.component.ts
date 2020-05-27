import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPerson();
  }

  get people(): Person[] {
    return this.personService.getPerson();
  }

}
