import { Injectable } from '@angular/core';
import {BlogPost} from "../models/blog-post";
import {BaseCommunicationService} from "./base-communication.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sight} from "../models/sight";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private endpoint: string = "/stats/"

  constructor(private baseCommunicationService: BaseCommunicationService, private http: HttpClient,private datepipe: DatePipe) { }

  public payout()
  {
    return this.http.get<Array<BlogPost>>(this.baseCommunicationService.addressOfService.concat(this.endpoint,'simulatePayout'))
  }

  public getAllStats():Observable<Map<Sight,number>>
  {
    return this.http.get<Map<Sight,number>>(this.baseCommunicationService.addressOfService.concat(this.endpoint,'allSights'))
  }

  public getDateStats(date:Date):Observable<Map<Sight,number>> {

    if (date != null) {
      let rightFormatDate = this.datepipe.transform(date, 'yyyy-MM-dd');
      if (rightFormatDate != null) {
        console.log(this.baseCommunicationService.addressOfService.concat(this.endpoint, 'allSights/', rightFormatDate));
        return this.http.get<Map<Sight, number>>(this.baseCommunicationService.addressOfService.concat(this.endpoint, 'allSights/', rightFormatDate));
      }
    }
    return this.http.get<Map<Sight, number>>(this.baseCommunicationService.addressOfService.concat(this.endpoint, 'allSights'));
  }

}
