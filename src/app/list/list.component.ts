import { Component, OnInit } from '@angular/core';
import { names } from '../data/NameMOCK';
import {NameAge} from '../data/NameAge';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  clickMessage = false;
  names: NameAge[] = names;
  name: NameAge;
  selectedPerson: NameAge;
  fubar: any;

  // tslint:disable-next-line:typedef
  onClickMe() {
    this.clickMessage = true;

  }

  setSelectedName(person: NameAge): void {
    this.clickMessage = false;
    this.selectedPerson = person;
    console.log(`${person.Name}`);
  }
}
