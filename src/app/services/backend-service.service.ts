import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { backEndConfig } from "../config/backEndConfig";

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }

  callNameAPI() {
  return this.http.get(backEndConfig.baseURL, {observe: 'body', responseType: 'json'})
  }

}
