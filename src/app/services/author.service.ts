import {Injectable} from '@angular/core';
import {BaseCommunicationService} from "./base-communication.service";
import {Author} from "../models/author";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private endpoint : string = "/blogs/resources/authors"

  constructor(private baseCommunicationService:BaseCommunicationService,private http: HttpClient ) { }

  public getAuthorsFromService():Observable<Array<Author>>
  {
    return this.http.get<Array<Author>>(this.baseCommunicationService.addressOfService.concat(this.endpoint))

  }

}
