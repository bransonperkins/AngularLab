import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  people: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.personService.getPerson().subscribe(
      (response) => {
        this.people = response;
        console.log('observable is working'); },
      (error) => { console.log(error); }
    );
  }

}
