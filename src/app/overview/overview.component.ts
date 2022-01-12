import { Component, OnInit } from '@angular/core';
import {Sight} from "../models/sight";
import {BlogPost} from "../models/blog-post";
import {Author} from "../models/author";
import {BlogPostService} from "../services/blog-post.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private blogPostService: BlogPostService) { }

  blogPosts: BlogPost[] = [
    new BlogPost(1,"Headline","Stefansdomasdasd",new Date(),new Sight(1,"",""),new Author(1,"",""))
  ];

  blogPostSelected()
  {

  }

  ngOnInit(): void {
    this.blogPostService.getBlogPostsFromService().subscribe((retBlogPosts :Array<BlogPost>) =>
    {
      this.blogPosts=retBlogPosts
    });
  }

}
