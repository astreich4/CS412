import { Component, OnInit } from '@angular/core';
import {BackendServiceService } from '../services/backend-service.service';
// import { clickMessage } from "../show-me-the-data/show-me-the-data.component";

interface NM {

  value: object;
  cashed: object;
}



@Component({
  selector: 'app-call-to-service',
  templateUrl: './call-to-service.component.html',
  styleUrls: ['./call-to-service.component.css']
})
export class CallToServiceComponent implements OnInit {
  selectedPerson: string;
  answerFromService: any;
  clicked: boolean;

  constructor( private BEService: BackendServiceService) { }

  ngOnInit(): void {
  }

  onClickMe() { // calls service to call backend to call api
                // @ts-ignore
  // console.log(this.selectedPerson);
    this.clicked = true;
    this.BEService.callNameAPI(this.selectedPerson).subscribe(
      (response: NM) => {
      console.log(`response: ` , response );
      this.answerFromService = [response.value, response.cashed];

    }
  );
  }

  setClickFalse() {
  this.clicked = false;
  }
}
