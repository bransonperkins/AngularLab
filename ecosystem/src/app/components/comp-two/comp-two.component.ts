import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  public show: boolean = false;
  public buttonName: any = 'Show';

  people: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.toggle();
  }

  getPeople(): void {
    this.delay(4000);
    this.personService.getPerson().subscribe(
      (response) => {
        this.people = response;
        console.log('observable is working' + this.people); },
      (error) => { console.log(error); }
    );
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonName = 'Get People';
    }
    else {
      this.getPeople();
      this.buttonName = 'Show People';
    }
  }

}
