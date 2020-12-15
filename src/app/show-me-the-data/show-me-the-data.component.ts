import {Component, Input, OnInit} from '@angular/core';




@Component({
  selector: 'app-show-me-the-data',
  templateUrl: './show-me-the-data.component.html',
  styleUrls: ['./show-me-the-data.component.css']
})
export class ShowMeTheDataComponent implements OnInit {


  @Input() names: any;
  @Input() clicked: boolean


  // response from api

  constructor() { }

  ngOnInit(): void {
  }


}
