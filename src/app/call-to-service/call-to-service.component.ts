import { Component, OnInit } from '@angular/core';
import {BackendServiceService } from "../services/backend-service.service";
//import { clickMessage } from "../show-me-the-data/show-me-the-data.component";

@Component({
  selector: 'app-call-to-service',
  templateUrl: './call-to-service.component.html',
  styleUrls: ['./call-to-service.component.css']
})
export class CallToServiceComponent implements OnInit {
  selectedPerson: String;
  answerFromService: any;

  constructor( private BEService: BackendServiceService) { }

  ngOnInit(): void {
  }

  onClickMe() { //calls service to call backend to call api
                // @ts-ignore

    this.BEService.callNameAPI().subscribe(
      (response) => {
      console.log(`response: ${response}`);
      this.answerFromService = response['current'];
    }

  )
  }

  setClickMeFalse() {


  }
}
