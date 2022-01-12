import { Injectable } from '@angular/core';
import {BaseCommunicationService} from "./base-communication.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/author";
import {Sight} from "../models/sight";

@Injectable({
  providedIn: 'root'
})
export class SightsService {

  private endpoint : string = "/blogs/resources/sights"

  constructor(private baseCommunicationService:BaseCommunicationService,private http: HttpClient ) { }

  public getSightsFromService():Observable<Array<Sight>>
  {
    return this.http.get<Array<Sight>>(this.baseCommunicationService.addressOfService.concat(this.endpoint))

  }
}
