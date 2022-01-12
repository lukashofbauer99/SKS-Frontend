import {Injectable} from '@angular/core';
import {BaseCommunicationService} from "./base-communication.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BlogPost} from "../models/blog-post";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  private endpoint: string = "/blogs/resources/blogPosts"

  constructor(private baseCommunicationService: BaseCommunicationService, private http: HttpClient) {
  }

  public getBlogPostsFromService(): Observable<Array<BlogPost>> {
    return this.http.get<Array<BlogPost>>(this.baseCommunicationService.addressOfService.concat(this.endpoint))
  }
  public getBlogPostFromService(id:number): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.baseCommunicationService.addressOfService.concat(this.endpoint,"/",id.toString()))
  }
  public postBlogPostsFromService(blogPost:BlogPost) {
    console.log(this.baseCommunicationService.addressOfService.concat(this.endpoint));
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(blogPost);
    this.http.post(this.baseCommunicationService.addressOfService.concat(this.endpoint),body,{'headers':headers}).subscribe();
  }
}
