import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseCommunicationService {

  public addressOfService : string = "http://localhost:8080/api";

  constructor() { }
}
