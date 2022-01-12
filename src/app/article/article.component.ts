import { Component, OnInit } from '@angular/core';
import {BlogPost} from "../models/blog-post";
import {Sight} from "../models/sight";
import {Author} from "../models/author";
import {ActivatedRoute} from "@angular/router";
import {BlogPostService} from "../services/blog-post.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  blogPost : BlogPost = new BlogPost(1,"Headline","Stefansdomasdasd",new Date(),new Sight(1,"",""),new Author(1,"",""));
  constructor(private route:ActivatedRoute,private blogPostSercice:BlogPostService) { }

  ngOnInit(): void {
    let id =Number(this.route.snapshot.paramMap.get('id'));
    this.blogPostSercice.getBlogPostFromService(id).subscribe((blogPost:BlogPost)=> this.blogPost=blogPost);
  }

}
