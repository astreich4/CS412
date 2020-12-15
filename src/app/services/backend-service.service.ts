import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { backEndConfig } from "../config/backEndConfig";

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }

  callNameAPI(param) {
  return this.http.post(backEndConfig.baseURL, {name: param , observe: 'body', responseType: 'json'})
  }

}
