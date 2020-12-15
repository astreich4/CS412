import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-show-me-the-data',
  templateUrl: './show-me-the-data.component.html',
  styleUrls: ['./show-me-the-data.component.css']
})
export class ShowMeTheDataComponent implements OnInit {


  names: any;
  private _clickMessage: boolean;

  //response from api

  constructor() { }

  ngOnInit(): void {
  }

  get clickMessage(): boolean {
    return this._clickMessage;
  }

   set clickMessage(value: boolean) {
    this._clickMessage = value;
  }
}
