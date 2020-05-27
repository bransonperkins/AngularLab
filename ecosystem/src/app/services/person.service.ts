import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private Person: new Person

  constructor() { }
}